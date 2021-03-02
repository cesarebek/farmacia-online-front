<template>
  <div
    @click.self="this.$emit('closeDetails')"
    class="z-10 fixed inset-0 overflow-hidden flex justify-center items-center"
    style="background: rgba(0,0,0,.75);"
  >
    <div
      class=" w-4/5 h-3/4  md:w-3/5 shadow-lg bg-white md:p-10 mx-auto rounded-2xl overflow-y-auto"
    >
      <div class="py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-md text-gray-500">Dettagli prodotto</p>
          <div class="cursor-pointer z-50">
            <svg
              @click="this.$emit('closeDetails')"
              class="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              ></path>
            </svg>
          </div>
        </div>
        <!--Body-->
        <div class="my-5 lg:flex lg:place-items-start">
          <img class="w-full lg:w-1/2" :src="product.product_image" alt="" />

          <div class="mt-5 lg:mt-0 text-lg lg:ml-16">
            <p
              class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
            >
              {{ product.title }}
            </p>
            <div class="flex items-center space-x-4 my-4">
              <div>
                <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span class="text-indigo-400 mr-1 mt-1">€</span>
                  <span class="font-bold text-indigo-600 text-3xl">{{
                    price
                  }}</span>
                </div>
              </div>
              <div class="flex-1">
                <p class="text-green-500 text-xl font-semibold">
                  Risparmia 15%
                </p>
                <p class="text-gray-400 text-sm">Iva compresa</p>
              </div>
            </div>
            <p class="text-gray-500 mb-5">{{ product.description }}</p>
            <button
              @click="addToCart"
              type="button"
              class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
            >
              Aggiungi al carrello
            </button>
            <p class="text-gray-500 text-sm mt-5">
              Ultimi {{ product.stock }} rimasti
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    product() {
      return this.$store.getters.getProductById(this.id);
    },
    price() {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(this.product.price);
    },
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
  methods: {
    addToCart() {
      if (!this.isLogged) {
        return this.$router.push('login');
      }
      const product = {
        id: this.id,
        title: this.product.title,
        price: this.product.price,
        image: this.product.image,
        stock: this.product.stock,
        quantity: 1,
      };
      this.$store.dispatch('addProductToCart', product);
    },
  },
};
</script>
