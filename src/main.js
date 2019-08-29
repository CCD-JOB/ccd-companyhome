import Vue from 'vue'
import App from './App.vue'
import Router from './router'

//  全局样式
import './assets/styles/global.scss'
import './assets/iconfont/iconfont.css'

// 引入elementUI
import './plugins/element.js'

// 引入iview组件
import './plugins/iview.js'

// 引入rem插件
import 'lib-flexible/flexible.js'

// 引入请求方法
import api from './utils/http'
Vue.use(api)

Vue.config.productionTip = false

const router = new Router()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
