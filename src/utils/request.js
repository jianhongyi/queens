import { Toast } from 'vant'
import axios from 'axios'
import { HTTPCONFIG } from './constant'
import { getApi } from '../api'
// import { getDeviceInfo, getRequest } from './client'
// const deviceInfo = getDeviceInfo()
// const requests = getRequest()
// 创建axios实例，实例配置
const service = axios.create({
  baseURL: '/api', // api 的 base_url
  headers: {
    'userId': 2301397,
    'access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMzAxMzk3IiwiYXVkIjoiMTEwNjcxMDIyIiwiYXV0aF90aW1lIjoxNjAzMTczMjc1LCJpc3MiOiIiLCJleHAiOjE2MDMxODA0NzUsIm5vbmNlIjoiIiwiaWF0IjoxNjAzMTczMjc1fQ.51L3g9iZIOUQIaIx-jUYARwqXWzHXXitc9qcGXiTUBc',
    'X-Ca-Stage': 'PRE'
  }
})
// axios的全局配置 全局的请求次数，请求的间隙
service.defaults.tryAgainTimes = HTTPCONFIG.tryAgainTimes
service.defaults.tryAgainDuring = HTTPCONFIG.tryAgainDuring
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// request拦截器
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.token = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// response 拦截器
service.interceptors.response.use(
  response => {
    // 响应数据
    const res = response.data
    // 正常返回数据
    if (response.status === 200) {
      if (res.code === '200') {
        const configData = response.config.data && JSON.parse(response.config.data)
        if (configData && configData.showResponse) {
          return response
        } else if (configData && configData.showMap) {
          return { code: res.code, msg: res.msg, data: res.data }
        } else {
          return res.data
        }
        // return res.data
      } else if (res.code === 'needLogin') {
        console.log('重新登陆')
      } else if (res.code === 404) {
        Toast('未找到内容')
      } else if (res.code === 504) {
        Toast('请求超时')
      } else if (res.code === 500) {
        Toast('服务器内部错误')
      } else if (res.code === '1010004') {
        Toast(res.msg)
      } else {
        // Toast(response)
        throw new Error(response)
      }
    }
  },
  error => {
    if (error.response && error.response.status === 500) { // 500服务器错误
      return Promise.reject('error')
    }
    return Promise.reject(error)
  }
)

var errorHandle = error => {
  error && Toast({
    message: error.message,
    type: 'fail',
    duration: 5 * 1000
  })
  return Promise.reject(error)
}
/**
 * method 默认post
 * urlSource 请求的服务器是sam? sfm? 默认sam
 * tryAgainOnError 请求错误是否重新请求
 * tryAgainOnTimeout 超时是否重新请求
 * tryAgainTimes  重新请求次数  默认 3次
 * tryAgainDuring 重新请求间隔  默认 2s
 * @param options
 */
var sendRequest = function(url, data, options, curTime = 1) {
  options = options || {}
  let promise = null
  var handelRequest = function(err) {
    if (axios.isCancel(err)) {
      return Promise.reject(err)
    }
    if (err && options.tryAgainOnTimeout && (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) || options.tryAgainOnError) {
      const _config = err.config
      var times = options.tryAgainTimes || _config.tryAgainTimes
      var during = options.tryAgainDuring || _config.tryAgainDuring
      if (curTime && curTime >= times) {
        return errorHandle(err)
      } else {
        setTimeout(() => {
          return sendRequest(url, data, options, ++curTime)
        }, during)
      }
    } else {
      return Promise.reject()
    }
  }
  if (!options.method) {
    promise = service.post(getApi(url), data, options).catch(err => handelRequest(err))
  } else if (options.method === 'put' || options.method === 'patch') {
    promise = service[options.method](getApi(url), data, options).catch(err => handelRequest(err))
  } else if (options.method.toLowerCase() === 'get') {
    let param = ''
    for (const key in data) {
      if (data[key] || data[key] === 0) {
        param = param + '&' + key + '=' + decodeURI(formatGetParam(data[key])) + ''
      }
    }
    const urlNew = getApi(url) + '?' + param.substr(1)
    promise = service[options.method](urlNew).catch(err => handelRequest(err))
  } else {
    promise = service[options.method](getApi(url), data, options).catch(err => handelRequest(err))
  }
  window.addEventListener('unhandledrejection', e => {
    e.preventDefault()
    return true
  })
  return promise
}
function formatGetParam(param) {
  param = param.toString()
  param = param.replace(/#/g, '%23')
  return param
}
export default sendRequest
