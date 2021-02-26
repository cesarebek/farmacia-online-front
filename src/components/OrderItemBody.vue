<template>
  <ProductDetails
    v-if="detailsOpen"
    @close-details="detailsOpen = !detailsOpen"
    :id="id"
  />
  <div class="flex mb-5">
    <img class="w-32 sm:w-48" :src="image" alt="immagine prodotto" />
    <div class="ml-10">
      <p class="mb-3 text-xl font-semibold text-gray-700">
        {{ title }}
      </p>
      <p class="mb-3 font-normal text-gray-700">Quantità: {{ quantity }}</p>
      <button
        @click="detailsOpen = !detailsOpen"
        class="hidden sm:block px-3 py-3 font-semibold rounded-xl bg-indigo-600 transform duration-200 hover:bg-indigo-500 text-white"
      >
        Visualizza il tuo articolo
      </button>
    </div>
  </div>
</template>
<script>
import ProductDetails from '@/components/ProductDetails';
export default {
  components: { ProductDetails },
  props: ['title', 'quantity', 'image', 'date', 'id'],
  data() {
    return {
      detailsOpen: false,
    };
  },
};
</script>
