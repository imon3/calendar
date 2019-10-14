import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextAreaAutoSize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutoSize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyBpiG7PUm6-jOWOeGE-ZGOA5N6zBBR7wds',
  authDomain: 'vue-calendar-81867.firebaseapp.com',
  databaseURL: 'https://vue-calendar-81867.firebaseio.com',
  projectId: 'vue-calendar-81867',
  storageBucket: 'vue-calendar-81867.appspot.com',
  messagingSenderId: '809304724851',
  appId: '1:809304724851:web:62c2012711985c179da106'
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
