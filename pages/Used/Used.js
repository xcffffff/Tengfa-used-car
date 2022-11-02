const { getCarList, getBrand, getPrice, getCarModel } = require("../../plugins/apis")
const time = require("../../utils/utils")
let dateOfRegistration = []
Page({
    /**
     * 页面的初始数据
     */
    data: {
        titleNav: ['首页', '二手车', '新车', '卖车', '腾发服务'],
        arr: [],
        brandArr: [], //品牌全部
        priceArr: [], //价格
        carTypeArr: [],//车型
        page: 1, //页数
        carBrand: "", // 品牌
        carModel: "", //车型
        saleType: 0, // selectArr
        Sort: "", // 排序
        priceStr: "", //价格
        sortArrowsFlag: true,
        brandArrowsFlag: true,
        priceArrowsFlag: true,
        carTypeArrowsFlag: true,
        moreArrowsFlag: true,
        maskFlag: true,
        sortArrows: "../../static/icons/xiajiantouy.png",
        brandArrows: "../../static/icons/xiajiantouy.png",
        priceArrows: "../../static/icons/xiajiantouy.png",
        carTypeArrows: "../../static/icons/xiajiantouy.png",
        moreArrows: "../../static/icons/xiajiantouy.png",
        sortMsg: "排序",
        brandMsg: "品牌",
        priceMsg: "价格",
        carTypeMsg: "车型",
        moreMsg: "更多",
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
        selectArr: [
            {
                name: "腾发自营",
                saleType: 0,
            },
            {
                name: "车主直售",
                saleType: 1,
            },
            {
                name: "限时秒杀",
                saleType: 2,
            },
            {
                name: "严选车源",
                saleType: 3,
            },
        ],
    },
    getcarlist() {
        getCarList({
            data: {
                page: this.data.page, //页数
                carBrand: this.data.carBrand, // 品牌
                priceStr: this.data.priceStr, //价格
                carModel: this.data.carModel, //车型
                saleType: this.data.saleType, // selectArr
                sort: this.data.Sort, // 排序
            }
        }
        ).then(res => {
            dateOfRegistration = res.data.data.content
            res.data.data.content.forEach((item, index) => {
                item.dateOfRegistration = time.formatTime(new Date(item.dateOfRegistration))
            })
            this.setData({
                arr: dateOfRegistration
            })
        })
    },
    // 处理数据
    getbrand() {
        getBrand({}).then(res => {
            let allArr = []
            let letter = []
            res.data.data.content.forEach(item => {
                letter.push(item.brand.split("-")[0])
            })
            letter = [... new Set(letter)]
            letter.forEach(item => {
                allArr.push({
                    brand: item,
                    childer: [],
                })
            })
            allArr.forEach(item => {
                res.data.data.content.forEach(ele => {
                    if (item.brand == ele.brand.split("-")[0]) {
                        item.childer.push({
                            name: ele.brand.split("-")[1],
                            id: ele.id,
                        })
                    }
                })
            })
            this.setData({
                brandArr: allArr
            })
            console.log(this.data.brandArr);
        })
    },
    getprice() {
        getPrice({}).then(res => {
            this.setData({
                priceArr: res.data.data
            })
        })
    },
    getcarmodel() {
        getCarModel({}).then(res => {
            this.setData({
                carTypeArr: res.data.data.content
            })
        })
    },
    selec(e) {
        console.log(e.currentTarget.dataset.num);
        this.setData({
            saleType: e.currentTarget.dataset.num
        })
        this.getcarlist()
    },
    navCar(e) {
        if (e.currentTarget.dataset.msg == "排序") {
            this.setData({
                sortArrowsFlag: !this.data.sortArrowsFlag,
                maskFlag: !this.data.maskFlag,
                brandArrowsFlag: true,
                priceArrowsFlag: true,
                carTypeArrowsFlag: true,
                moreArrowsFlag: true
            })
        }
        if (e.currentTarget.dataset.msg == "品牌") {
            this.setData({
                sortArrowsFlag: true,
                priceArrowsFlag: true,
                carTypeArrowsFlag: true,
                moreArrowsFlag: true,
                brandArrowsFlag: !this.data.brandArrowsFlag,
                maskFlag: !this.data.maskFlag
            })
        }
        if (e.currentTarget.dataset.msg == "价格") {
            this.setData({
                brandArrowsFlag: true,
                sortArrowsFlag: true,
                carTypeArrowsFlag: true,
                moreArrowsFlag: true,
                priceArrowsFlag: !this.data.priceArrowsFlag,
                maskFlag: !this.data.maskFlag
            })
        }
        if (e.currentTarget.dataset.msg == "车型") {
            this.setData({
                brandArrowsFlag: true,
                sortArrowsFlag: true,
                priceArrowsFlag: true,
                moreArrowsFlag: true,
                carTypeArrowsFlag: !this.data.carTypeArrowsFlag,
                maskFlag: !this.data.maskFlag
            })
        }
        if (e.currentTarget.dataset.msg == "更多") {
            this.setData({
                brandArrowsFlag: true,
                sortArrowsFlag: true,
                priceArrowsFlag: true,
                carTypeArrowsFlag: true,
                moreArrowsFlag: !this.data.moreArrowsFlag,
                maskFlag: !this.data.maskFlag
            })
        }
    },
    sortClick(e) {
        this.setData({
            Sort: e.currentTarget.dataset.sort
        })
        this.getcarlist()
    },
    // priceClick(e) {
    //     if (JSON.parse(e.currentTarget.dataset.price).currentPriceLt <= 10) {
    //         this.setData({
    //             priceStr: `currentPriceLt=${JSON.parse(e.currentTarget.dataset.price).currentPriceLt}`
    //         })
    //     } else if (JSON.parse(e.currentTarget.dataset.price).currentPriceGe >= 100) {
    //         this.setData({
    //             priceStr: `currentPriceGe=${JSON.parse(e.currentTarget.dataset.price).currentPriceGe}`
    //         })
    //     } else {
    //         this.setData({
    //             priceStr: `currentPrices=${JSON.parse(e.currentTarget.dataset.price).currentPrices[0]}&currentPrices=${JSON.parse(e.currentTarget.dataset.price).currentPrices[1]}`
    //         })
    //     }
    //     this.getcarlist()
    // },
    carTypeClick(e) {
        this.setData({
            carModel: e.currentTarget.dataset.type
        })
        this.getcarlist()
    },
    brandClick(e) {
        console.log(e.currentTarget.dataset.id);
        this.setData({
            carBrand: e.currentTarget.dataset.id
        })
        this.getcarlist()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getcarlist()
        this.getbrand()
        this.getprice()
        this.getcarmodel()
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