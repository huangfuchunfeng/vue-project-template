const dev = require('./proxyDev')
const test = require('./proxyTest')
const pro = require('./proxyPro')
const proxy = {
  dev,
  test,
  pro
}
module.exports = proxy[process.env.VUE_APP_ENV || 'dev']
