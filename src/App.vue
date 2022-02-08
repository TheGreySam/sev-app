<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/calendario">Calendario</router-link> |
      <router-link to="/confirmacion">Confirmacion</router-link> |
      <router-link to="/estado">Estado</router-link>
    </div>
    <router-view />
    <Footer/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffff;
  
}

#nav {
  padding: 15px;
  background-color: #00ff00;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #428db9;
}
</style>

<script>
import Footer from "./components/Footer.vue";

export default {
  
  components: {
    Footer
    
  },
};
</script>
