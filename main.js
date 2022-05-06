import App from './App'


import moment from 'moment';
Vue.prototype.$moment = moment;

配置封装的uni.request
import {myRequest} from './util/api'
Vue.prototype.$myRequest = myRequest

// import {Button} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif
// Vue.use(Button);
// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif