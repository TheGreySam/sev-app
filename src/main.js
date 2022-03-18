import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import vuetify from "./plugins/vuetify";
import VueGeolocation from "vue-browser-geolocation";

Vue.config.productionTip = false;
Vue.use(VueGeolocation);

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places",
  },
  installComponents: false,
});

Vue.component("calendar", Calendar);
Vue.component("date-picker", DatePicker);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
