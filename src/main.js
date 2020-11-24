import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from 'bootstrap-vue'
import vueScrollto from 'vue-scrollto'
import MagicGrid from 'vue-magic-grid'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Import the styles directly. (Or you could add them via script tags.)
import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// css style
import "./assets/css/style.css"

// Plugins
Vue.use(BootstrapVue)
Vue.use(vueScrollto)
Vue.use(MagicGrid)


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
