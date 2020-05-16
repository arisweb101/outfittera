import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Tinybox from "vue-tinybox";
import ScrollAnimation from '@/assets/js/scrollAnimation'
import VueScrollTo from 'vue-scrollto';
 
Vue.use(Tinybox);
Vue.use(VueScrollTo)
Vue.directive('scrollanimation', ScrollAnimation);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
