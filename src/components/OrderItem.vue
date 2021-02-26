<template>
  <div class="mx-3 rounded-lg border border-gray-300 overflow-hidden">
    <!-- HEADER -->
    <div class="bg-gray-100 text-gray-600 p-5 text-xs border-b border-gray-300">
      <div class="flex justify-between">
        <div class="flex space-x-5 sm:space-x-10">
          <div>
            <p class="uppercase">Ordine effettuato il:</p>
            <p>{{ date }}</p>
          </div>
          <div>
            <p class="uppercase">Totale</p>
            <p>{{ amountFormatted }}</p>
          </div>
          <div class="hidden sm:block">
            <p class="uppercase">Invia a</p>
            <p>{{ userName.name }}</p>
          </div>
        </div>

        <div class="flex items-center">
          <p class="uppercase">Ordine</p>
          <p># {{ id }}</p>
        </div>
      </div>
    </div>
    <!-- BODY -->
    <div class="p-5">
      <p class="text-2xl font-bold mb-5 text-gray-700">
        Ordine in preparazione
      </p>

      <OrderItemBody
        v-for="product in products"
        :key="product.id"
        :quantity="product.pivot.quantity"
        :image="product.product_image"
        :title="product.title"
        :id="this.id"
      />
    </div>
    <!-- FOOTER -->
    <div class="p-5 border-t border-gray-300">
      <router-link
        to="/shop"
        class="hover:underline hover:text-indigo-500 text-blue-500"
        >Continua con lo shopping</router-link
      >
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import OrderItemBody from '@/components/OrderItemBody';

export default {
  components: { OrderItemBody },
  props: ['products', 'dateRaw', 'id', 'amount'],
  computed: {
    date() {
      return moment(this.dateRaw).format('D MMMM YYYY');
    },
    userName() {
      return this.$store.getters.user;
    },
    amountFormatted() {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(this.amount);
    },
  },
};
</script>
