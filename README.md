# react-native-ichart

ichart for react-native

*based on ichart: https://github.com/wanghetommy/ichartjs

---

## Install

```
$ npm i react-native-ichart --save
```

## Usage

```
'use strict';

import React from 'react-native';
import IChart from 'react-native-ichart';

const {
    View,
    Component,
} = React;

const styles = {
    ichart: {
        width: 320,
        height: 240
    }
};

export default class Example extends Component {
    renderChart() {
        var data = [{
            name: '北京',
            value: [-9, 1, 12, 20, 26, 30, 32, 29, 22, 12, 0, -6],
            color: '#1f7e92',
            line_width: 3
        }];
        var chart = new iChart.LineBasic2D({
            render: 'canvas-container',
            data: data,
            title: '北京2012年平均温度情况',
            width: 300,
            height: 200,
            coordinate: {
                height: '90%',
                background_color: '#f6f9fa'
            },
            sub_option: {
                hollow_inside: false, //设置一个点的亮色在外环的效果
                point_size: 16
            },
            labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
        });
        chart.draw();
    }
    render() {
        return (
            <View>
                <IChart
                    render={this.renderChart}
                    style={styles.ichart}
                />
            </View>
        )
    }
}
```

## LICENSE

* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
