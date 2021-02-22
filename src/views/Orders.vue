<template>
  <div class="container sm:mx-auto mb-16">
    <p class="mx-3 text-3xl font-semibold text-gray-700 mb-5">I miei ordini</p>
    <p class="mx-3 mb-5">
      <span class="font-bold">{{ orderAmount }} {{ orderWord }} </span>
      {{ doneWord }}
    </p>
    <div class="space-y-10">
      <OrderItem
        v-for="order in orders"
        :key="order.id"
        :products="order.products"
        :date="order.created_at"
        :id="order.id"
        :amount="order.amount"
      />
    </div>
  </div>
</template>

<script>
import OrderItem from '@/components/OrderItem';
export default {
  components: { OrderItem },
  async mounted() {
    await this.$store.dispatch('loadOrders');
  },
  computed: {
    orders() {
      return this.$store.getters.orders;
    },
    orderAmount() {
      return this.orders.length;
    },
    orderWord() {
      return this.orderAmount === 1 ? 'Ordine' : 'Ordini';
    },
    doneWord() {
      return this.orderAmount === 1 ? 'Effettuato' : 'Effettuati';
    },
  },
};
</script>
