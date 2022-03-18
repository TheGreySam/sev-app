<template>
  <div>
    <h3>Tus coordenadas</h3>
    <p>{{ coordinates.lat }} Latitud, {{ coordinates.lng }} Longitud</p>
    <!--GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        style="width:640px; height:360px;"
        ></GmapMap-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },
  created() {
    // get user's coordinates from browser request
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((error) => alert(error));
  },
};
</script>
