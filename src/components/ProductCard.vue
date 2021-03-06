<template>
  <div
    class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden flex-none"
  >
    <div
      @click="detailsOpen = !detailsOpen"
      class="cursor-pointer flex items-end justify-end h-56 w-full bg-cover bg-center"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <button
        v-if="isLogged"
        @click.stop="addProductToCart"
        class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
      >
        <svg
          class="h-5 w-5"
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
      </button>
    </div>
    <div class="px-5 py-3">
      <h3 class="text-gray-700 uppercase">{{ title }}</h3>
      <span class="text-gray-500 mt-2">€{{ priceFormatted }}</span>
    </div>
    <transition-group name="product">
      <ProductDetails
        @close-details="detailsOpen = !detailsOpen"
        v-if="detailsOpen"
        :id="id"
      />
    </transition-group>
  </div>
</template>

<script>
import ProductDetails from '@/components/ProductDetails';
export default {
  props: ['price', 'title', 'image', 'id', 'stock'],
  data() {
    return {
      detailsOpen: false,
    };
  },
  components: { ProductDetails },
  computed: {
    priceFormatted() {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(this.price);
    },
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
  methods: {
    addProductToCart() {
      const product = {
        id: this.id,
        title: this.title,
        price: this.price,
        image: this.image,
        stock: this.stock,
        quantity: 1,
      };
      this.$store.dispatch('addProductToCart', product);
    },
    showid() {
      console.log(this.id);
      console.log(this.stock);
    },
  },
};
</script>

<style scoped>
/* Animations */
.product-enter-from {
  opacity: 0;
  transform: scale(1.1);
}
.product-enter-active {
  transition: all 0.5s ease-out;
}
.product-enter-to {
  opacity: 1;
  transform: scale(1);
}

.product-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
.product-leave-active {
  transition: all 0.3s ease-in;
}
.product-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
