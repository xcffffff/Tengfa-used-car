import * as echarts from '../../ec-canvas/echarts';
var chart = null;

function initChart(canvas, width, height, option) {
    chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);
    var option = option;
    chart.setOption(option);
    return chart;
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ec: {}
    },
    echartInit(e) {
        var option = {
            backgroundColor: "#ffffff",
            color: ["#CC0000", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C"],
            series: [{
                type: 'pie',
                center: ['50%', '50%'],
                radius: [0, '60%'],
                data: [{
                    value: 55,
                    name: '虎山'
                }, {
                    value: 20,
                    name: '天马'
                }, {
                    value: 10,
                    name: '虎球'
                }, {
                    value: 20,
                    name: '青山虎'
                }, {
                    value: 38,
                    name: '光宇'
                },],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 2, 2, 0.3)'
                    }
                }
            }]
        };
        initChart(e.detail.canvas, e.detail.width, e.detail.height, option);
    },
})