import Vue from 'vue'
import App from '../App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false
import "../stylesheets/main.scss"
import "./models/rem"
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'

import '../directive/directive'
Vue.prototype.$http = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
