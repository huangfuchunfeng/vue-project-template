const gateway = process.env.VUE_APP_API_GETAWAY
module.exports = {
  '/api': {
    target: gateway,
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
}
