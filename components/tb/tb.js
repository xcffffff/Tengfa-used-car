// components/tb/tb.js
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
     arr:['首页','二手车','新车','卖车','腾发服务'],
     show:''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        cl(e){
          // console.log(1);
          console.log(e.currentTarget.dataset.index);
          
          this.setData({
            show:e.currentTarget.dataset.index
        })
        }
    }
})
