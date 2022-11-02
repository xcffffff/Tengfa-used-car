import axios from "./http.js";
export const xz = (params) => {
    return axios({
        url: "/n/api/tfcar/car/convenient",
        params
    })
}
export const car = (params) => {
    return axios({
        url: "/n/api/tfcar/car/list?",
        params
    })
}
export const gg = (params) => {
    return axios({
        url: "/n/api/tfcar/website/indexNews",
        params
    })
}
export const qg = (params) => {
    return axios({
        url: "/n/api/tfcar/city/treeList",
        params
    })
}
export const News = () => {
    return axios({
        url: "/n/api/tfcar/website/allNews"
    })
}
export const xq = (data) => {
    return axios({
        url: "/n/api/tfcar/car/basicInfo/" + data
    })
}
export const tl = (data) => {
    return axios({
        url: "/n/api/tfcar/car/similarRecommendation/" + data
    })
}


// 二手车全部里面的abcd
export const all = () => {
    return axios({
        url: "/n/api/tfcar/car/brand300" 
    })
}
export const type = (data) => {
    return axios({
        url: "/n/api/tfcar/car/series300?brandId="+data 
    })
}
// 二手车品牌
export const brand = () => {
    return axios({
        url: "/n/api/tfcar/car/customSeries" 
    })
}
// 车型
export const Models = () => {
    return axios({
        url: "/n/api/tfcar/car/model" 
    })
}
// 价格
export const  Price = () => {
    return axios({
        url: "/n/api/tfcar/car/price" 
    })
}
// 更多
export const   more = () => {
    return axios({
        url: "/n/api/tfcar/car/moreScreen" 
    })
}
// 里面有多个
export const  almost = () => {
    return axios({
        url: "/n/api/tfcar/car/moreScreen" 
    })
}
// 二手车渲染
export const  first = (params,a,b,c) => {
    return axios({
        url: "/n/api/tfcar/car/list?"+a+'&'+b+'&'+c,
        params
    })
}

// export const getData1 = (data) => post("后端接口名",data);