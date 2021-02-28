<template>
  <div class="container mx-auto my-12">
    <div class="grid mx-3 md:grid-cols-2 gap-4 space-y-3">
      <!-- ********** CATEGORY 1 ********** -->

      <div
        class="h-64 rounded-md overflow-hidden bg-cover bg-center md:col-span-2"
        :style="{ backgroundImage: `url(${farmaciaImg})` }"
      >
        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div class="px-10 max-w-xl">
            <h2 class="text-2xl text-white font-semibold text-shadow-md">
              Parafarmacia
            </h2>
            <p class="mt-2 text-gray-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              facere provident molestias ipsam sint voluptatum pariatur.
            </p>
            <button
              @click="
                this.$router.push({
                  path: 'shop',
                  query: { category_id: '1' },
                })
              "
              class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              <span>Acquista Ora</span>
              <svg
                class="h-5 w-5 mx-2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- ********** CATEGORY 2 ********** -->

      <div
        class="h-64 rounded-md overflow-hidden bg-cover bg-center"
        :style="{ backgroundImage: `url(${integratoriImg})` }"
      >
        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div class="px-10 max-w-xl">
            <h2 class="text-2xl text-white font-semibold text-shadow-md">
              Integratori
            </h2>
            <p class="mt-2 text-gray-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              facere provident molestias ipsam sint voluptatum pariatur.
            </p>
            <button
              @click="
                this.$router.push({
                  path: 'shop',
                  query: { category_id: '2' },
                })
              "
              class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              <span>Acquista Ora</span>
              <svg
                class="h-5 w-5 mx-2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- ********** CATEGORY 3 ********** -->
      <div
        class="h-64 rounded-md overflow-hidden bg-cover bg-center"
        :style="{ backgroundImage: `url(${cosmesiImg})` }"
      >
        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div class="px-10 max-w-xl">
            <h2 class="text-2xl text-white font-semibold text-shadow-md">
              Cosmetica
            </h2>
            <p class="mt-2 text-gray-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              facere provident molestias ipsam sint voluptatum pariatur.
            </p>
            <button
              @click="
                this.$router.push({
                  path: 'shop',
                  query: { category_id: '3' },
                })
              "
              class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              <span>Acquista Ora</span>
              <svg
                class="h-5 w-5 mx-2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import farmaciaImg from '@/assets/images/farmacia.jpg';
import cosmesiImg from '@/assets/images/cosmesi.jpeg';
import integratoriImg from '@/assets/images/integratori.jpg';
export default {
  data() {
    return {
      farmaciaImg: farmaciaImg,
      cosmesiImg: cosmesiImg,
      integratoriImg: integratoriImg,
    };
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
};
</script>
