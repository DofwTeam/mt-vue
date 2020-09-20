import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/',
    // baseUrl: 'http://localhost:3000',
    timeout: 1000,
    headers: {
        'content-type': 'application/json'
    }
})

// 请求拦截器
http.interceptors.request.use(
    config => {
        return config
    },
    err => {
        console.log('请求拦截器错误', err)
    }
)

// 响应拦截器
http.interceptors.response.use(
    res => {
        if (res.data.token) {
            localStorage.token = res.data.token
        }
        return res.data
    },
    err => {
        if (err.response.status === 422) {
            return err.response.data
        }
        if (err.response.status === 500) {
            // console.log(err.response)
            alert(err.response.data.message)
        }
    }
)
export default http
