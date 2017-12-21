// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'reset.css'
import '@/assets/base.css'
import '@/assets/myMint.css'

import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import ElementUI from 'element-ui'
import '@/assets/element-theme/index.css'
import axios from '@/config/axios.js'
import VueAxios from 'vue-axios'
import Cookie from 'js-cookie'

import '@/assets/util.js'
import '@/assets/common.js'
import '@/assets/validates.js'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
