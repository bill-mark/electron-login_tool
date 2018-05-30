import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios'
import 'c-swipe/dist/swipe.css';
import { Swipe, SwipeItem } from 'c-swipe';
import './assets/resert.css'


Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
