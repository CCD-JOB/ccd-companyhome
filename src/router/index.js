import Vue from 'vue'
import Router from 'vue-router'
import routes from 'config/routes.config.js'

Vue.use(Router)

export default () => {
  const isDev = process.env.NODE_ENV === 'development'
  return new Router({
    mode: isDev ? 'history' : 'hash',
    routes
  })
}
