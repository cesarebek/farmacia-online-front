<template>
  <div
    class="flex justify-around  items-center hover:bg-gray-100 -mx-8 px-6 py-5"
  >
    <div class="sm:flex sm:w-2/5">
      <div class="w-20">
        <img class="h-24" :src="image" alt="product" />
      </div>
      <div class="flex flex-col justify-between ml-4 flex-grow">
        <span class="font-bold text-sm">{{ title }}</span>
        <button
          @click="deleteProductFromCart"
          class="flex sm:block font-semibold hover:text-red-500 text-gray-500 text-xs"
        >
          Rimuovi
        </button>
      </div>
    </div>
    <div class="flex justify-center w-1/5">
      <svg
        @click="removeProductFromCart"
        class="fill-current text-gray-600 w-3"
        viewBox="0 0 448 512"
      >
        <path
          d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
        />
      </svg>

      <h1 class="px-3">{{ quantity }}</h1>

      <svg
        @click="addItemQuantity"
        class="fill-current text-gray-600 w-3"
        viewBox="0 0 448 512"
      >
        <path
          d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
        />
      </svg>
    </div>
    <span class="hidden sm:block text-center w-1/5 font-semibold text-sm"
      >€ {{ price }}</span
    >
    <span class="hidden sm:block text-center w-1/5 font-semibold text-sm"
      >€ {{ total }}</span
    >
  </div>
</template>

<script>
export default {
  props: ['title', 'quantity', 'price', 'image', 'id', 'index', 'stock'],
  computed: {
    total() {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(this.quantity * this.price);
    },
  },
  methods: {
    addItemQuantity() {
      const product = { id: this.id, stock: this.stock };
      this.$store.dispatch('addProductToCart', product);
    },
    removeProductFromCart() {
      const product = {
        id: this.id,
        quantity: this.quantity,
        index: this.index,
      };
      this.$store.dispatch('removeProductFromCart', product);
    },
    deleteProductFromCart() {
      const product = {
        index: this.index,
      };
      this.$store.dispatch('deleteProductFromCart', product);
    },
  },
};
</script>
