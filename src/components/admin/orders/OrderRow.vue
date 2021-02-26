<template>
  <OrderDetails
    v-if="OrderDetailsOpen"
    @close-details="OrderDetailsOpen = false"
    :id="order.id"
  />
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10"># {{ order.id }}</div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ user.name }}
          </div>
          <div class="text-sm text-gray-500">
            {{ user.email }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-500">{{ creation }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap ">
      <div
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
        {{ amount }}
      </div>
    </td>
    <td class="px-6 py-4 ">
      <span class="text-sm text-gray-500">
        {{ order.items_count }}
      </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <button
        @click="OrderDetailsOpen = !OrderDetailsOpen"
        class="text-indigo-600 hover:text-indigo-900"
      >
        Visualizza Dettagli
      </button>
    </td>
  </tr>
</template>

<script>
import moment from 'moment';
import OrderDetails from '@/components/admin/orders/OrderDetails';

export default {
  components: { OrderDetails },
  props: ['id'],
  data() {
    return {
      OrderDetailsOpen: false,
    };
  },
  computed: {
    order() {
      return this.$store.getters.getOrderById(this.id);
    },
    user() {
      return this.$store.getters.getUserById(this.order.user_id);
    },
    creation() {
      return moment(this.order.created_at).format('D MMMM YYYY');
    },
    amount() {
      return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      }).format(this.order.amount);
    },
  },
};
</script>
