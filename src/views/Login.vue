<template>
  <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
    <div class="py-8 px-8 rounded-xl">
      <h1 class="font-medium text-2xl mt-3 text-center">Login</h1>
      <form action="" class="mt-6">
        <div class="my-5 text-sm">
          <label for="email" class="block text-black">Email</label>
          <input
            id="email"
            v-model="email"
            type="text"
            autofocus
            class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Email"
          />
        </div>
        <div class="my-5 text-sm">
          <label for="password" class="block text-black">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Password"
          />
        </div>
        <button
          @click.prevent="login"
          class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full"
        >
          Accedi
        </button>
      </form>
      <p class="mt-12 text-xs text-center font-light text-gray-400">
        Non hai un account?
        <router-link to="/register" class="text-black font-medium">
          Registrati ora!
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
  methods: {
    async login() {
      try {
        console.log(this.isLogged);
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        });
        console.log(this.isLogged);
        this.$router.replace('Shop');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
