const proxy = require('./config/proxy/index.js')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  assetsDir: 'static',
  indexPath: 'index.html',
  productionSourceMap: false,
  publicPath: '/',
  devServer: {
    port: 8080,
    open: true,
    proxy: proxy,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/utilities/_index.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      new CompressionPlugin(),
      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 10000
      })
    ],
    optimization: {
      splitChunks: {
        automaticNameDelimiter: '-'
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugin('define').tap(args => {
      args[0]['process.env']['VUE_APP_DateTime'] = '"' + new Date() + '"'
      return args
    })
  }
}
