'use strict';

import React from 'react-native';
import ichart from './lib/ichart-wrapper.js';

const {
    View,
    WebView,
} = React;

export default React.createClass({
    propTypes: {
        render: React.PropTypes.func.isRequired
    },
    render: function() {
        let renderString = this.props.render.toString();
        return (
            <View>
                <WebView
                    html={this.createHTML(renderString)}
                    style={this.props.style}
                    automaticallyAdjustContentInsets={false}
                    contentInset={{top: 0, right: 0, bottom: 0, left: 0}}
                />
            </View>
        );
    },
    createHTML: function(render) {
        var html = `
            <DOCTYPE html>
            <html>
                <head>
                    <title>iChart</title>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="initial-scale=1, width=device-width, user-scalable=no">
                    <style>
                        body{margin:0;padding:0;}
                        #canvas-container{width:100%;height:100%;};
                    </style>
                    <script>
                        window.onerror=function (){
                            alert(JSON.stringify(arguments));
                        };
                        ${ichart}
                    </script>
                </head>
                <body>
                    <div id="canvas-container"></div>
                    <script>
                        $(function(){
                            (${render})();
                        });
                    </script>
                </body>
            </html>
        `;
        return html;
    }
});

