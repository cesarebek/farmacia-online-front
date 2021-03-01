<template>
  <div class="flex flex-col">
    <p class="font-bold text-2xl text-gray-700 my-4">Gestione Ordini</p>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Info Ordine
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Data Ordine
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Totale
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Quantità prodotti
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Modifica</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <OrderRow
                v-for="order in orders"
                :key="order.id"
                :id="order.id"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderRow from '@/components/admin/orders/OrderRow';

export default {
  components: { OrderRow },
  async created() {
    await this.$store.dispatch('loadAllUsers');
    await this.$store.dispatch('loadAllOrders');
  },
  computed: {
    orders() {
      return this.$store.getters.allOrders;
    },
  },
};
</script>
