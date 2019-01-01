import 'babel-polyfill'
import 'common/js/hack'

import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import VueHighcharts from 'vue-highcharts'
import Highcharts from 'highcharts'
import VueCollapse from 'vue2-collapse'

// 全局初始化
import store from './store'

// import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'
/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

fastclick.attach(document.body)
Vue.use(VueCollapse)
Vue.use(VueHighcharts, { Highcharts })
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
// 注入Store
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
