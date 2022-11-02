const axios = require('./axios')
const baseUrl = "https://api.tf2sc.cn/api"
export function getCarList(obj) {
    return axios({
        url: baseUrl + "/tfcar/car/list",
        ...obj
    })
}
export function getBrand(obj) {
    return axios({
        url: baseUrl + "/tfcar/car/brand300",
        ...obj
    })
}
export function getPrice(obj) {
    return axios({
        url: baseUrl + "/tfcar/car/price",
        ...obj
    })
}
export function getCarModel(obj) {
    return axios({
        url: baseUrl + "/tfcar/car/model",
        ...obj
    })
}