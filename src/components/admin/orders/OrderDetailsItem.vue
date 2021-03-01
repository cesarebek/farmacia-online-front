<template>
  <div class="flex my-5 bg-gray-100 rounded-lg overflow-hidden">
    <img class="w-32 h-44 sm:w-48" :src="image" alt="immagine prodotto" />
    <div class="ml-5 mt-2">
      <p class="mb-3 text-xl font-semibold text-gray-700">
        {{ title }}
      </p>
      <p class="mb-3 font-normal text-gray-700">ID Prodotto: {{ id }}</p>
      <p class="mb-3 font-normal text-gray-700">Quantità: {{ quantity }}</p>
      <p class="mb-3 font-normal text-gray-700">
        Prezzo unitario: {{ priceFormatted }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'image', 'quantity', 'price'],
  computed: {
    priceFormatted() {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(this.price);
    },
  },
};
</script>
