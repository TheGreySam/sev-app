<template>

    <v-row
    class="home"
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <v-img img alt="Vue logo" src="../assets/Logo SEVd.svg"></v-img>
        <h1 class="text-h4 font-weight-thin mb-4" color="green">
          Sev App
        </h1>
        <v-container>
          <h4 class="subheading">
          Recarga tu vehiculo en todas nuestras estaciones de carga
        </h4>

        </v-container>
        <v-spacer></v-spacer>
      </v-col>
      
    </v-row>

 
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  color: green;
  padding-top: 20%;

  padding-bottom: 20%;
}
</style>
