const axios = require('./axios')
const baseUrl = "https://api.tf2sc.cn/api"
export function getCarList(obj) {
    return axios({
<<<<<<< HEAD
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
=======
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
export function Brand(obj) {
    return axios({
        url: baseUrl + `/tfcar/car/customSeries`
    })
}
export function Models(obj) {
    return axios({
        url: baseUrl + `/tfcar/car/model`
    })
}
export function Price(obj) {
    return axios({
        url: baseUrl + `/tfcar/car/price`
    })
}

>>>>>>> 2cb16c83928d2cdafccd0c6144ef6950ed3e8c48
