// const env = process.env.NODE_ENV
// const prefix = env === 'production' ? '' : 'question-center'
const prefix = 'test'
export default {
  getQuesData: `${prefix}/stu/homewk/h5/category/question/query`,
  submitQuestion: `${prefix}/stu/homewk/h5/question/answer/submit`,
  deleteData: `${prefix}/stu/homewk/h5/question/remove`
}
