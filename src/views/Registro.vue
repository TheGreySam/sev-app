<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="#00a100">
                <v-toolbar-title
                  >
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
          <form
            @submit.prevent="registerUser"
            class="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          >
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <v-text-field
              type="text"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              placeholder="Full Name"
              v-model="username"
              required
            />

            <v-text-field
              type="text"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              placeholder="Email"
              v-model="email"
              required
            />

            <v-text-field
              type="password"
              class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              placeholder="Password"
              v-model="password"
              required
            />
            <v-btn
              type="submit"
              class="mt-4"
                    color="#00a100"
                    dark
                   
            >
              Create Account
            </v-btn>
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
export default {
  name: "register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async registerUser() {
      await fetch("http://bus.biznet.cl:8280/SEV_usuarios_roles_op_insert_usuarios_app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "this.username",
          email: "this.email",
          password: "this.password",
        }),
      });
    },
  },
};
</script>