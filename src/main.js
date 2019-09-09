import Vue from 'vue'
import App from './App.vue'
import Router from './router'

import 'babel-polyfill'
import Es6Promise from 'es6-promise'

//  全局样式
import './assets/styles/global.scss'
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

// 引入elementUI
import './plugins/element.js'

// 引入rem插件
import 'lib-flexible/flexible.js'

// 引入请求方法
import api from './utils/http'
Vue.use(api)

Es6Promise.polyfill()

Vue.config.productionTip = false

const router = new Router()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
