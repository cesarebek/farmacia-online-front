<template>
  <header class="mb-5">
    <div class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="hidden w-full text-gray-600 md:flex md:items-center">
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
              fill="currentColor"
            />
          </svg>
          <span class="mx-1 text-sm">UD</span>
        </div>

        <img class="h-20" src="@/assets/images/parafarmacia.gif" alt="logo" />

        <!-- ********* Register Link ********* -->
        <div class="flex items-center justify-end w-full space-x-3">
          <router-link
            to="Register"
            v-if="!isLogged"
            class="text-gray-600 focus:outline-none mx-4 sm:mx-0 "
          >
            <span>Registrati</span>
          </router-link>

          <!-- ********* Login Link ********* -->
          <router-link
            to="Login"
            v-if="!isLogged"
            class="text-gray-600 focus:outline-none mx-4 sm:mx-0 flex items-center space-x-1"
          >
            <span>Login</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </router-link>

          <!-- Logout Button -->
          <button
            v-if="isLogged"
            @click="logout"
            class="text-gray-600 focus:outline-none sm:mx-0"
          >
            <svg
              class="h-6 relative"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>

          <!-- Cart Button -->
          <button
            v-if="isLogged"
            @click="this.$router.push('/cart')"
            class="text-gray-600 focus:outline-none mx-2 sm:mx-0 relative"
          >
            <svg
              class="h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <div
              v-if="itemsCounter > 0"
              class="absolute -top-1 -right-2 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs bg-green-400"
            >
              {{ itemsCounter }}
            </div>
          </button>

          <div class="flex sm:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              type="button"
              class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <nav
        :class="mobileMenuOpen ? '' : 'hidden'"
        class="sm:flex flex sm:justify-center justify-center text-center sm:items-center mt-4"
      >
        <div class="flex flex-col sm:flex-row">
          <router-link
            to="/"
            class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
            >Home</router-link
          >
          <router-link
            to="/shop"
            class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
            >Shop</router-link
          >
          <router-link
            to="/contact"
            class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
            >Contattaci</router-link
          >
          <router-link
            to="/about"
            class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
            >Su di Noi</router-link
          >
          <router-link
            v-if="isLogged"
            to="/orders"
            class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
            >I miei ordini</router-link
          >
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div
            v-if="isAdmin === 'super-admin'"
            class="relative inline-block text-left"
          >
            <div>
              <button
                @click="adminOpen = !adminOpen"
                type="button"
                class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0 flex items-center z-20"
                id="options-menu"
              >
                Amministrazione
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              v-if="adminOpen"
              @click="adminOpen = !adminOpen"
              class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
            >
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <router-link
                  to="/admin/products"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Prodotti</router-link
                >
                <router-link
                  to="/admin/users"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Utenti</router-link
                >
                <router-link
                  to="/admin/orders"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Ordini</router-link
                >
                <router-link
                  to="/admin/messages"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Messaggi</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      adminOpen: false,
    };
  },
  mounted() {
    console.log(this.$store.getters.user);
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
    isAdmin() {
      return this.$store.getters.user
        ? this.$store.getters.user.roles[0].name
        : false;
    },
    itemsCounter() {
      return this.$store.getters.itemsCounter;
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
