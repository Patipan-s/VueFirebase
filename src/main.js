
import Vue from 'vue'
import App from './App.vue'
import './firebase';              //import firebase
import VueFire from 'vuefire';    //import firebase

Vue.use(VueFire);                 //use firebase
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
