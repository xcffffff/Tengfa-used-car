const {getNav} =require('../../plugins/apis')
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
        car:[],
        Price:[],
        Models:[]
    },

    /**
     * 组件的方法列表
     */
    methods: {
      qq(){
        getNav({}).then(res=>{
        //   console.log(res.data.data);
          this.setData({
              car:res.data.data.convenientBrands,
              Price:res.data.data.convenientPrices,
              Models:res.data.data.convenientModels
          })
        })
      }
    },
    lifetimes:{
      created(){
        this.qq()
      }
    }
})
