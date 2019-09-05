const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  publicPath: isDev ? '/' : './',
  chainWebpack: config => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('config', resolve('src/config'))
      .set('utils', resolve('src/utils'))
      .set('pages', resolve('src/pages'))
      .set('layouts', resolve('src/layouts'))
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use(['pug-plain-loader'])
      .loader('pug-plain-loader')
      .end()
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log']
            }
          }
        })
      ]
    }
  },
  devServer: {
    
  }
}

function resolve (dir) {
  return path.resolve(__dirname, dir)
}
