const {getCarList} =require('../../plugins/apis')
const time  =require('../../utils/utils')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        arr:['排序','品牌','价格','车型','更多'],
        arr1:['腾发自营','车主自营','限时优惠','严选好车'],
        arr2:[]
    },
    qq(){
        getCarList({}).then(res=>{
            res.data.data.content.forEach(e=>{
                let sj =time.formatTime(new Date(e.dateOfRegistration))
                // console.log();
                sj=sj.split(' ')[0]
                e.dateOfRegistration= sj
            })
            this.setData({
                arr2:res.data.data.content
            })
            console.log(this.data.arr2);
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.qq()
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