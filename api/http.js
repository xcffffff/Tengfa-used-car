
import axios from "axios";

const app = axios.create({
    // baseURL: process.env.VUE_base_url
    // baseURL: "http://127.0.0.1:9527/api"
    timeout: 2000,//请求超时
    // 公共请求头
    headers: {
        "User-Agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        PlatformType: "h5"
    }
})

// 添加请求拦截器
app.interceptors.request.use(function (config) {
    // console.log(config, "---------------");
    // 在发送请求之前做些什么
    //  很多时候 后端 会要求你把 token 带再请求头里面
    // if(token){
    //     config.headers["aabb"]="adskjdhsajkdasd45asd24"
    // }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
app.interceptors.response.use(function (response) {

    // console.log(response, "**********************")
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default app