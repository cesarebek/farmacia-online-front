<template>
  <nav class="container mx-auto items-center flex justify-between py-5">
    <router-link to="/"><h1 class="font-bold">Farmacia Online</h1></router-link>
    <div>
      <ul class="flex space-x-3">
        <router-link to="/banco" v-if="isLogged"
          ><li
            class="p-3 transition duration-500 ease-out font-semibold hover:text-gray-600"
          >
            Banco
          </li></router-link
        >
        <button v-if="isLogged" @click="logout">
          <li
            class="py-3 transition duration-500 ease-out font-semibold hover:text-gray-600"
          >
            Logout
          </li>
        </button>
        <router-link to="/login" v-if="!isLogged"
          ><li
            class="py-3 transition duration-500 ease-out font-semibold hover:text-gray-600"
          >
            Accedi
          </li></router-link
        >
        <router-link to="/register" v-if="!isLogged"
          ><li
            class="py-3 transition duration-500 ease-out font-semibold hover:text-gray-600"
          >
            Registrati
          </li></router-link
        >
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/login');
    },
  },
};
</script>
