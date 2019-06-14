import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuex from 'vuex';

import App from './App.vue';
import router from './router';

Vue.use(VueResource);
Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
});