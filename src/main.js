// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
// import { Overlay } from 'vant';

import vueAplayer from 'vue-aplayer'
// Vue.use(Overlay);
Vue.use(vueAplayer)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
// axios 请求的基恩路径
// axios.defaults.baseURL = "http://192.168.1.103:8088/api";




Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
