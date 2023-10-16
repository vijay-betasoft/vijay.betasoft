import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import VueRouter from 'vue-router'
// import router from './routes'
import Vuetify from 'vuetify'

// Vue.use(VueRouter)
Vue.use(Vuetify)
// vueConfig.use(VueRouter)

Vue.config.productionTip = false
 
new Vue({
  vuetify,
  // router:router,
  render: h => h(App)
}).$mount('#app')
