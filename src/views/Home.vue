<template>
<v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <v-img img alt="Vue logo" src="../assets/Logo_SEVc_Verde.png"></v-img>
      </v-col>
    </v-row>
  </v-parallax>
 
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  padding-top: 10%;

  padding-bottom: 10%;
}
</style>
