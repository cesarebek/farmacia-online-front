<template>
  <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
    <div class="py-8 px-8 rounded-xl">
      <h1 class="font-medium text-2xl mt-3 text-center">Registrazione</h1>
      <form action="" class="mt-6">
        <div class="my-5 text-sm">
          <label for="username" class="block text-black">Nome</label>
          <input
            v-model="name"
            id="username"
            type="text"
            autofocus
            class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Username"
          />
        </div>
        <div class="my-5 text-sm">
          <label for="email" class="block text-black">Email</label>
          <input
            v-model="email"
            id="email"
            type="text"
            autofocus
            class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Username"
          />
        </div>
        <div class="my-5 text-sm">
          <label for="password" class="block text-black">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Password"
          />
        </div>
        <div class="my-5 text-sm">
          <label for="confirm-pass" class="block text-black"
            >Conferma Password</label
          >
          <input
            v-model="confirmPass"
            id="confirm-pass"
            type="password"
            class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Conferma Password"
          />
        </div>

        <button
          @click.prevent="signup"
          class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full"
        >
          Registrati
        </button>
      </form>

      <p class="mt-12 text-xs text-center font-light text-gray-400">
        Hai già un account?
        <router-link to="/login" class="text-black font-medium">
          Accedi ora!
        </router-link>
      </p>
      <teleport to="body">
        <base-toast
          v-if="message"
          class="absolute top-10 right-10"
          @reset-message="resetMessage"
        >
          {{ message }}
        </base-toast>
      </teleport>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPass: '',
      message: '',
    };
  },
  methods: {
    async signup() {
      this.message = null;
      if (!this.email || !this.password || !this.confirmPass || !this.name) {
        return (this.message =
          'Prima di proseguire, completa tutti i campi richiesti.');
      }
      if (this.password !== this.confirmPass) {
        return (this.message = 'La password di conferma è errata.');
      }
      try {
        await this.$store.dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$router.replace('/');
      } catch (e) {
        console.log(e);
        this.message = e.response.data.message;
      }
    },
    resetMessage() {
      this.$store.dispatch('resetUserMessage');
      this.message = null;
    },
  },
};
</script>
