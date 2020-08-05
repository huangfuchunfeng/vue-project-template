import Vue from 'vue'
import Vuex from 'vuex'
import { loadModules } from '@/utils/common'
Vue.use(Vuex)
// 加载所有模块。
const context = require.context('./modules', false, /([a-z_]+)\.js$/i)
const modules = loadModules(context, 'object', /([a-z_]+)\.js$/i)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    langs: []
  },
  mutations: {
    setLangs (state, langs) {
      state.langs = langs
    }
  },
  actions: {},
  modules
})
if (module.hot) {
  // 在任何模块发生改变时进行热重载。
  module.hot.accept(context.id, () => {
    const { modules } = loadModules()
    store.hotUpdate({
      modules
    })
  })
}

export default store
