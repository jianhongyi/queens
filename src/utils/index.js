import { REGEXPS } from '../utils/constant'
import { cloneDeep } from 'lodash'
/**
 * 获取并拼接 letterFill 和 wordFill 的答案
 * @param {String} str 被处理的题干
 * @param {Function} callback 替换下划线的回调函数
 */
export function getLetterAndWordFillAnswer(str = '', callback = () => '', isReplaceBlankImg = true, isReplaceCarriage = true, isReplaceEle = true) {
  if (isReplaceBlankImg && REGEXPS.blankImgReg.test(str)) {
    str = str.replace(REGEXPS.blankImgReg, ($1, $2, $3) => {
      return callback($1, $2, $3)
    })
  }
  if (isReplaceCarriage && REGEXPS.carriageReg.test(str)) {
    str = str.replace(REGEXPS.carriageReg, '\r\n')
  }
  if (isReplaceEle && REGEXPS.notUEle.test(str)) {
    str = str.replace(REGEXPS.notUEle, '')
  }
  str = str.replace(REGEXPS.bFBlankReg, '')
  return str
}
// 提取出题干中的纯文本
export function getPureText(target, rep, isReplaceBlankImg = true, isReplaceEle = true, isReplaceMark = false) {
  let content = ''
  if (typeof target === 'object') {
    const body = cloneDeep(target)
    content = body.content
  } else {
    content = target
  }
  if (!content) return ''
  if (REGEXPS.splitBetween.test(content)) {
    content = RegExp.$1
  }
  if (isReplaceBlankImg && REGEXPS.blankImgReg.test(content)) {
    content = content.replace(REGEXPS.blankImgReg, () => {
      return rep
    })
  }
  if (isReplaceEle && REGEXPS.notBdoEle.test(content)) {
    content = content.replace(REGEXPS.notBdoEle, '')
  }
  if (isReplaceMark && REGEXPS.markReg.test(content)) {
    content = content.replace(REGEXPS.markReg, '')
  }
  content = content.trim()
  return content
}
// 生成一个为一个id
export function uuid(id = Math.ceil(Math.random() * 100000) + '') {
  return id + new Date().getTime() + Math.ceil(Math.random() * 100000) + ''
}
