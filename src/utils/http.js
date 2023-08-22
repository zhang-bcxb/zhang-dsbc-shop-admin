import axios from "axios"
// import {ElNotification} from 'element-plus'
// import {useCookies} from '@vueuse/integrations/useCookies'
import {getToken} from '~/utils/auth.js'
import {msgUtil} from '~/utils/message.js'
import store from "../store"

const service = axios.create({
  // baseURL: "/api"
  baseURL: import.meta.env.VITE_BASE_URL
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 往header头自动添加token
  /*const cookie = useCookies()
  const token = cookie.get("admin-token")*/
  const token = getToken()
  if (token) {
    config.headers["token"] = token
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // return response.data.data;
  return response.request.responseType == "blob" ? response.data : response.data.data;
}, function (error) {
  // 对响应错误做点什么
  /*ElNotification({
    message: error.response.data.msg || "请求失败",
    type: 'error',
    duration: 3000
  })

  msgUtil(error.response.data.msg || "请求失败", 'error')
  return Promise.reject(error);*/

  const msg = error.response.data.msg || "请求失败"

  if (msg == "非法token，请先登录！") {
    // 退出登录
    store.dispatch("logout").finally(() => location.reload())
  }

  msgUtil(msg, "error")

  return Promise.reject(error);
})

export default service