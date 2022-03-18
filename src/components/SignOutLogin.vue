export const state = () => ({ logged: false, accessToken: false, }) export const
mutations = { set_login(state) { state.logged = !state.logged }, } export const
actions = { setLogin({ commit }) { commit('set_login') }, } export const getters
= { loggedIn(state) { return state.logged || false }, }
<template>
  <div>
    <v-icon>mdi-account</v-icon>
    <button v-if="loggedIn" @click="setLogin()">Logout</button>
    <button v-else @click="setLogin()">Login</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      loggedIn: "loggedIn",
    }),
  },
  methods: {
    ...mapActions({
      setLogin: "setLogin",
    }),
  },
};
</script>
