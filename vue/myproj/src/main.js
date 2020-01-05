// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Users from '@/components/Users'
import Products from '@/components/Products'
import Router from 'vue-router'
import Events from '@/components/Events'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueResource)
 const routers = [
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
	]
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: routers
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})
