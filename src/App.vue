<template>
  <v-app>
    <v-app-bar app color="#00a100" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>SEV App</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        {{ $store.state.username }}
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed expand-on-hover permanent>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class=" text--accent-4">
          <v-img
            img
            alt="Vue logo"
            src="./assets/Logo SEVd.svg"
            max-width="150"
          ></v-img>

          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/login">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <!--v-list-item to="/registro" >
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registro</v-list-item-title>
          </v-list-item-->

          <v-list-item to="/calendario">
            <v-list-item-icon>
              <v-icon>mdi-calendar</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Calendario</v-list-item-title>
          </v-list-item>

          <v-list-item to="/confirmacion">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Confirmacion</v-list-item-title>
          </v-list-item>

          <v-list-item to="/estado">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Estado</v-list-item-title>
          </v-list-item>

          <v-list-item to="/registro">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registro</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-parallax dark height="1000" src="./assets/White_BG.jpg">
        <router-view fluid />
      </v-parallax>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    //Navbar: () => import("./components/Navbar"),
    Footer: () => import("./components/Footer.vue"),
    //SignOutLogin: () => import("./components/SignOutLogin.vue"),
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
