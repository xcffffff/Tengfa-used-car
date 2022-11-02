const { getCarList } = require("../../plugins/apis")
Page({
    /**
     * 页面的初始数据
     */
    data: {
        sort: [
            {
                name: "默认排序",
                sort: "",
            },
            {
                name: "最新发布",
                sort: "uTime,desc",
            },
            {
                name: "价格最高",
                sort: "currentPrice,desc",
            },
            {
                name: "价格最低",
                sort: "currentPrice,asc",
            },
        ],
        navArr: ["排序", "品牌", "价格", "车型", "更多"]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        getCarList({}).then(res => {
            console.log(res);
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})