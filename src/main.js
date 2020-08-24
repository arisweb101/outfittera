import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
// import axios from 'axios';
import './plugins/axios'
// import VueAxios from 'vue-axios';
import Tinybox from 'vue-tinybox';
import ScrollAnimation from '@/assets/js/scrollAnimation';
import VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use  for styles
import hoverEffect from 'hover-effect';

AOS.init({
  startEvent: 'load'
});
Vue.use(hoverEffect);
Vue.use(Tinybox);
Vue.use(VueScrollTo);
Vue.directive('scrollanimation', ScrollAnimation);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
