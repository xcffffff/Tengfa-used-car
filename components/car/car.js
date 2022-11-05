const {getCarList} =require('../../plugins/apis')
const time  =require('../../utils/utils')
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        arrr:[],
        id:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        qq(){
            getCarList({}).then(res=>{
                let msg =115215151515
                // console.log(res.data.data.content);
                res.data.data.content.forEach(e=>{
                    let sj =time.formatTime(new Date(e.dateOfRegistration))
                    // console.log();
                    sj=sj.split(' ')[0]
                    e.dateOfRegistration= sj
                })
                this.setData({
                    arr:res.data.data.content
                })
                console.log(this.data.arr);
            })
        },
        tz(e){
            console.log(e.currentTarget.dataset.id);
            this.setData({
                id:e.currentTarget.dataset.id
            })
            wx.navigateTo({
                url: '/pages/detail/detail',
                success: res => {
                    // 通过 eventChannel 向被打开页面传送数据
                    res.eventChannel.emit('san', this.data.id)
                }
            })
        }
    },
    lifetimes:{
        created(){
          this.qq()
        }
      }
})
