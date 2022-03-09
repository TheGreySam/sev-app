<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="footer">
        <strong class="subheading">Biznet It Tecnologias de Informacion</strong>

        <v-spacer></v-spacer>

        
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        <strong>SEV App</strong> - {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<style>
.footer {
  padding: 15px;
  background-color: #00a100;
 
}
</style>
