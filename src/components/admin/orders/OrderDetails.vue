<template>
  <div
    @click.self="this.$emit('closeDetails')"
    class="z-20 fixed inset-0 overflow-hidden flex justify-center items-center"
    style="background: rgba(0,0,0,.7);"
  >
    <div class="w-3/4 h-3/4 bg-gray-200 rounded-xl p-5 fixed overflow-y-scroll">
      <div class="rounded-lg p-3 bg-gray-100 shadow-sm">
        <p class="text-2xl font-medium">Dettagli dell'ordine</p>
        <div class="flex text-sm">
          <p class="mr-3">Ordinato il {{ creation }}</p>
          -
          <p class="ml-3">Numero ordine: #{{ order.id }}</p>
        </div>
        <div class="mt-5 text-md lg:w-1/3">
          <p class="font-semibold text-lg">Riepilogo Ordine</p>
          <div class="flex justify-between">
            <p>Subtotale articoli:</p>
            <span>{{ amountFormatted }}</span>
          </div>
          <div class="flex justify-between">
            <p class="mb-5">Costi di spedizione:</p>
            <span>0,00 €</span>
          </div>
          <div class="flex justify-between">
            <p class="font-bold">Totale:</p>
            <span>{{ amountFormatted }}</span>
          </div>
        </div>
      </div>

      <OrderDetailsItem
        v-for="product in order.products"
        :key="product.id"
        :title="product.title"
        :id="product.id"
        :quantity="product.pivot.quantity"
        :image="product.product_image"
        :price="product.price"
      />
      <div class="flex justify-end">
        <button
          @click="deleteOrder"
          class="mb-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Elimina questo ordine
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDetailsItem from '@/components/admin/orders/OrderDetailsItem';
import moment from 'moment';
export default {
  components: { OrderDetailsItem },
  props: ['id'],
  computed: {
    order() {
      return this.$store.getters.getOrderById(this.id);
    },
    amountFormatted() {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(this.order.amount);
    },
    creation() {
      return moment(this.order.created_at).format('D MMMM YYYY, H:mm');
    },
  },
  methods: {
    async deleteOrder() {
      await this.$store.dispatch('deleteOrder', this.id);
    },
  },
};
</script>
