import Vue from 'vue';
import * as firebase from 'firebase/app';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import firebaseConfig from './config';
import 'firebase/functions';

const fb = firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-multi-assign
Vue.fb = Vue.prototype.$fb = fb;

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBZRQpW_lQgW1UwjDzFrMCbeoJgW_OzAoc',
    libraries: 'places',
    region: 'co',
    language: 'es',
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
