import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"

Vue.config.productionTip = false

import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
