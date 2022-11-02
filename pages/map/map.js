Page({
    data: {
      mapCtx: null,
      mapWidth: 200,
      mapHeight: 200,
      longitude: 113.804847,
      latitude: 34.703849,
      markers: [],
      textData: { name: '', desc: '' },
      //0:加载完成  1:加载中
      searchLoadingStatus: 0,
      //当前选中纬度信息
      currentLocationInfo: {
        longitude: 200,
        latitude: 0
      }
    },
    regionChange: function (e) {
      var that = this;
      var changeType = e.type;
    },
    amapGetRegeo: function (longitude, latitude) {
      var that = this;
      myAmapFun.getRegeo({
        location: longitude + ',' + latitude,
        success: function (data) {
          if (data != null && data.length > 0) {
            that.setData({
              textData: {
                name: data[0].desc,
                desc: data[0].regeocodeData.formatted_address
              },
              currentLocationInfo: {
                longitude: longitude,
                latitude: latitude
              }
            });
            //console.log(that);
          }
          that.setData({
            searchLoadingStatus: 0
          });
        }
      })
    },
    onReady: function (e) {
      var that = this;
      // 使用 wx.createMapContext 获取 map 上下文
      that.mapCtx = wx.createMapContext('loactionMap', this);
    },
    onLoad(options) {
      var that = this;
   
      that.authorAddress();
    //   that.setMapSize();
    //   that.getShareLocation(options);
    },
    //用户地理位置授权
    authorAddress:function(){
      var that = this;
      that.getCurrentLocation('gcj02', function (res) {
        console.log(res);
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        });
      });
    },
    //初始化当前位置
    getCurrentLocation: function (typeCode, succFun) {
      var that = this;
      wx.getLocation({
        type: typeCode,
        success: function (res) {
          return succFun(res);
        },
        fail:function(res){
          wx.openSetting({
            success: function (data) {
              console.log(4444)
              console.log(data);
              that.authorAddress();
            },
            fail: function () {
              console.info("设置失败返回数据");
            }
          });
        }
      })
    }
  });