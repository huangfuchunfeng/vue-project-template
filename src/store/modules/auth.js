const state = () => ({
  userInfo: {},
  accessToken: ''
})
const getters = {}
const actions = {}
const mutations = {
  setUserInfo (state, payload) {
    state.userInfo = payload
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
