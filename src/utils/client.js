import Bridge from './dsBridge.js'
// 获取客户端请求头设备信息
export function getDeviceInfo() {
  return new Promise((resolve, reject) => {
    Bridge.callHandler('getDeviceInfo', {}, (res) => {
      resolve(res)
    })
  })
}
// 返回操作
export function returnBack() {
  console.log('退出')
  Bridge.callHandler('dissmissWebView', {}, (res) => {
    console.log(res, '退出')
  })
}
// 调用五星好评
export function showDevicePerfect() {
  console.log('调用五星好评')
  Bridge.callHandler('showDevicePerfect', {}, (res) => {
    console.log(res, '调用五星好评')
  })
}
// 隐藏客户端导航栏
export function hideClientBar() {
  return new Promise((resolve, reject) => {
    Bridge.callHandler('hideNativeNavBar', {}, (res) => {
      console.log(res, '隐藏导航栏')
      resolve(res)
    })
  })
}
// 隐藏客户端状态栏
export function hiddenStatusBar() {
  return new Promise((resolve, reject) => {
    Bridge.callHandler('hiddenStatusBar', {}, (res) => {
      console.log(res, '隐藏状态栏')
      resolve(res)
    })
  })
}
// 解析路径上的参数
export function getRequest() {
  const isHash = location.hash
  var url = isHash ? decodeURIComponent(location.hash) : decodeURIComponent(location.search)
  var theRequest = {}
  if (url.indexOf('?') !== -1) {
    var str = isHash ? url.split('?')[1] : url.substr(1)
    var strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}

// function isMobile() {
//   const u = navigator.userAgent
//   const trident = u.indexOf('Trident') > -1 // IE内核
//   const presto = u.indexOf('Presto') > -1 // opera内核
//   const webKit = u.indexOf('AppleWebKit') > -1 // 苹果、谷歌内核
//   const gecko = u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1 // 火狐内核
//   const mobile = !!u.match(/AppleWebKit.*Mobile.*/) // 是否为移动终端
//   const ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
//   const android = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // android终端或者uc浏览器
//   const iPhone = u.indexOf('iPhone') > -1 // 是否为iPhone或者QQHD浏览器
//   const iPad = u.indexOf('iPad') > -1 // 是否iPad
//   const webApp = u.indexOf('Safari') === -1 // 是否web应该程序，没有头部与底部
//   if (mobile || ios || android || iPhone || iPad) {
//     return true
//   } else {
//     return false
//   }
// }
export function isMobile() {
  const userInfo = navigator.userAgent
  const Agents = ['Android', 'iPhone',
    'SymbianOS', 'Windows Phone',
    'iPad', 'iPod']// 移动设备数组
  let flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userInfo.indexOf(Agents[v]) > 0) {
      flag = true
      break
    }
    flag = false
  }
  return flag
}
