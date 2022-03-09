<template>
  <div class="home">
    <div class="login">
      <h2 class="title">Login</h2>
      <form action class="form">
        <label class="form-label" for="#email">Usuario</label>
        <input
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Usuario"
        />
        <label class="form-label" for="#password">Contraseña:</label>
        <input
          class="form-input"
          type="password"
          id="password"
          placeholder="Contraseña"
        />
        <input
          class="form-submit"
          type="submit"
          value="Entrar"
          @click="buttonLogin"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.login {
  padding: 1rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 90%;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}
.form-submit {
  background: #00ff00;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
</style>

<script>
import Firebase from "firebase";
export default {
  data: () => ({
    dialog: false,
    valid: true,
    password: "",
    show1: false,
    email: "",
  }),

  methods: {
    buttonLogin() {
      if (this.$refs.form.validate()) {
        Firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((response) => {
            this.$store.dispatch("defineCurrentUser", {
              email: response.user.email,
            });
            this.$store.dispatch("subscribeToAuthStateChange");
            this.dialog = false;
            this.$router.push("/fondo");
          })
          .catch(() => {
            this.$swal("Upss, correo o contraseña incorrectos");
          });
      }
    },
    resetForm() {
      this.dialog = false;
      this.$refs.form.reset();
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>
