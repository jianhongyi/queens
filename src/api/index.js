import testApi from './testApi.js'
const apis = {
  ...testApi
}
/**
 * xuemingli
 * 获取接口
 * @param key
 * @returns {*}
 */
function getApi(key) {
  if (typeof key === 'object') {
    const params = key.params
    const paramsArr = []
    Object.keys(params).map(e => {
      paramsArr.push(`${e}=${params[e]}`)
    })
    return apis[key.urlKey] + '?' + paramsArr.join('&')
  } else {
    return apis[key] ? apis[key] : key
  }
}

export {
  getApi
}
