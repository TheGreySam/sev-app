<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="#00a100">
                <v-toolbar-title
                  >{{
                    isRegister ? stateObj.register.name : stateObj.login.name
                  }}
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form
                  ref="form"
                  @submit.prevent="isRegister ? register() : login()"
                >
                  <v-text-field
                    v-model="username"
                    name="username"
                    label="Usuario"
                    type="text"
                    placeholder="usuario"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Contraseña"
                    type="password"
                    placeholder="contraseña"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-if="isRegister"
                    v-model="confirmPassword"
                    name="confirmPassword"
                    label="Confirmar contraseña"
                    type="password"
                    placeholder="confirmar contraseña"
                    required
                  ></v-text-field>
                  <div class="red--text">{{ errorMessage }}</div>
                  <v-btn
                    type="submit"
                    class="mt-4"
                    color="#00a100"
                    dark
                    value="log in"
                    >{{
                      isRegister ? stateObj.register.name : stateObj.login.name
                    }}</v-btn
                  >
                  <div
                    class="grey--text mt-4"
                    v-on:click="isRegister = !isRegister"
                  >
                    {{ toggleMessage }}
                  </div>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      isRegister: false,
      errorMessage: "",
      stateObj: {
        register: {
          name: "Registro",
          message: "Ya tienes una cuenta? Ingresa aqui.",
        },
        login: {
          name: "Ingreso",
          message: "Registro",
        },
      },
    };
  },
  methods: {
    async login() {
      const { username } = this;
      //console.log(username + " logged in")
      //this.$router.replace({name: "Home", params: {
      //   username: username
      //}})
      let result = await axios.get(
        `http://bus.biznet.cl:8280/SEV_Login_usuarios_Login_usuarios?user=${this.username}&password=${this.password}`
      );

      //console.log(result.data.LoginRowCount.Login.Rol);
      console.warn(result);
      if (result.data.LoginRowCount == null) {
        console.log("Error");
        alert("Error");
      } else {
        this.$router.replace({
          name: "Home",
          params: {
            username: username,
          },
        });
      }
    },
    register() {
      if (this.password == this.confirmPassword) {
        this.isRegister = false;
        this.errorMessage = "";
        this.$refs.form.reset();
      } else {
        this.errorMessage = "password did not match";
      }
    },
  },
  computed: {
    toggleMessage: function () {
      return this.isRegister
        ? this.stateObj.register.message
        : this.stateObj.login.message;
    },
  },
};
</script>
