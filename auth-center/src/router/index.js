import Vue from 'vue'
import Router from 'vue-router'
import Login from '~/login'
import {routerMode} from '@/config/env'
Vue.use(Router)

export default new Router({
	mode: routerMode,
  routes: [
  	{
      path: '/',
      redirect:'/login'
   },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }
  ]
})
