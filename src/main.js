import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Aplayer from 'vue-aplayer'
Vue.config.productionTip = false

Vue.use(Aplayer)
Vue.use(ElementUI)
new Vue({
  Aplayer,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
