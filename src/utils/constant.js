// 选项索引
export const OPTION_MAPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// request.js 中的常量
export const HTTPCONFIG = {
  timeout: 60000,
  urlSource: 'unischool',
  tryAgainTimes: 2,
  tryAgainDuring: 2000
}
// 题型标识映射
export const WITCHQUESTIONCOMSHOW = {
  '0': 'queensSelect',
  '2': 'queensFill',
  '6': 'queensSort',
  '7': 'queensLine',
  '8': 'queensJudge',
  '10': 'queensOral',
  '9': 'queensComposite'
}
// 题型类型映射
export const TEMPLATETYPE = {
  'selectFillC': 'selectFillComplex', // 选词填空
  'readFillC': 'readFillComplex', // 阅读填空
  'clozeFillC': 'clozeFillComplex', // 完形填空
  'readSelectC': 'readSelectComplex', // 阅读选择
  'readJudgeC': 'readJudgeComplex' // 阅读判断
}
// 正则表达式
export const REGEXPS = {
  // 匹配两个竖线中间的部分，即 |****|
  splitBetween: /\|(.+)\|/,
  // 匹配从富文本编辑器录入的空白,即 <img src=\"http://testv2.english.diplotalk.unischool.cn/static/xiahuaxian.png\" alt=\"\" class=\"ke-content-kong\" />
  blankImgReg: /<img [^>]* class=\"ke-content-kong\"(.*?)>/gi,
  // 匹配除了<bdo>以外的所有标签
  notBdoEle: /(?!<\/?bdo.*?>)<.+?>/gi,
  // 匹配除了<u>标签以外的所有标签
  notUEle: /(?!<\/?u.*?>)<.+?>/gi,
  // 匹配富文本录入的块级标签或者换行标签
  carriageReg: /<(\/)(p|br|div)>|<br>/gi,
  // 匹配开头或者尾部的空白符
  bFBlankReg: /^\s+|\s+$/,
  // 匹配图片路径
  imgUrlReg: /https?.*?\.(jpe?g|gif|png|webp|jfif|bmp|tif)(\?(.*))?/i,
  // 匹配单个字母+空白图片或者空白图片+单个字母
  letterBlankReg: /[a-zA-Z\s\?\!\.\,\？\！\。\，]*(<img [^>]* class=\"ke-content-kong\"(.*?)>)[a-zA-Z\s\?\!\.\,\？\！\。\，]*/gi,
  // 匹配符号
  markReg: /[\?\!\.\,\？\！\。\，]/g,
  // 匹配结尾的符号
  endsMarkRes: /([\?\!\.\,\？\！\。\，])?$/
}
// 颜色常量集合
export const COLORS = [
  {
    bg: '#fff8df',
    bd: '#ffca0b'
  },
  {
    bg: '#f7e9ff',
    bd: '#db9afe'
  },
  {
    bg: '#fff2e7',
    bd: '#ffa00b'
  },
  {
    bg: '#ddf2ff',
    bd: '#99def2'
  },
  {
    bg: '#e7edff',
    bd: '#8aa8fe'
  }
]
// 连线题选项类型常量
export const LINERITEMTYPE = {
  img: 'img',
  text: 'text',
  audio: 'audio'
}
// 连线题小圆半径
export const CIRCLERADIUS = 7
// 连线题template值
export const LINERTEMPLATE = ['textLine', 'imgTextLine', 'audioTextLine', 'imgLine', 'audioImgLine']
