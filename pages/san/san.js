import * as echarts from '../../echs/ec-canvas/echarts';
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
    ec: {},
    title:'每天的工作情况'
  },
  echartInit(e) {
    var option = {
      backgroundColor: "#ffffff",
      color: ["#CC0000", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C"],
      series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: [0, '60%'],
        title: {
            text: '每天的工作情况',
            subtext: '又是辛苦的一天'
          },
        data: [{
          value: 55,
          name: '星期一'
        }, {
          value: 20,
          name: '星期二'
        }, {
          value: 10,
          name: '星期三'
        }, {
          value: 20,
          name: '星期四'
        }, {
          value: 38,
          name: '星期五'
        }, ],
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
  //点击按钮修改图表
cl() {
    var option = chart.getOption();
    console.log(option)
    var option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };
    chart.setOption(option, true);
  },
})