const axios = require('./axios')
const baseUrl = "https://api.tf2sc.cn/api"
export function getCarList(obj) {
    return axios({
        url: baseUrl + `/tfcar/car/list`
    })
}
export function getNav(obj) {
    return axios({
        url: baseUrl + `/tfcar/car/convenient`
    })
}
export function xiangqing(obj) {
    return axios({
        url: baseUrl + `/tfcar/car/basicInfo/${obj}`
    })
}

