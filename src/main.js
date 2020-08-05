import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/style.scss'
import { i18n, langs } from './i18n/index'
import './lib/elementUI'

store.commit('setLangs', langs)
Vue.config.productionTip = false
Vue.config.devtool = true
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
