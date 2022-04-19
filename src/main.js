import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"



import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin)

import VAnimateCss from 'v-animate-css';
Vue.use(VAnimateCss);

new Vue({
  render: h => h(App),
}).$mount('#app')
