import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: false,
    accessToken: false,
    username: null,
    data: [],
  },
  mutations: {
    set_login(state) {
      state.logged = !state.logged;
    },
  },
  actions: {
    setLogin({ commit }) {
      commit("set_login");
    },
  },
  modules: {},
});
