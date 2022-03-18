<template>
  <div>
    <div>
      <v-toolbar dark color="#00a100">
        <v-toolbar-title>Programa tu carga </v-toolbar-title>
      </v-toolbar>

      <form action class="form">
        <DatePicker v-model="date" mode="dateTime" :minute-increment="5" />
        <input class="form-submit" type="submit" value="Entrar" />
      </form>
    </div>
  </div>
</template>

<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  components: {
    DatePicker,
  },
  data() {
    let date = new Date();
    date.setMinutes(0, 0, 0);
    return {
      date,
    };
  },
};
</script>

<style scoped>
.form {
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 95%;
  max-width: 100%;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}
.form-input:focus {
  outline: 0;
  border-color: #1ab188;
}
.form-submit {
  background: #00a100;
  border: none;
  color: white;
  margin-top: 1rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
.form-submit:hover {
  background: #0b9185;
}
</style>
