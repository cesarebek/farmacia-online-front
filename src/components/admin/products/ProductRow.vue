<template>
  <ProductUpdate
    @close-details="updateOpen = !updateOpen"
    v-if="updateOpen"
    :product="product"
  />
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img
            class="h-10 w-10 rounded-full"
            :src="product.product_image"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ product.title }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-500">{{ creation }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-500">{{ lastChange }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
        {{ product.stock }}
      </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <button
        @click="updateOpen = !updateOpen"
        class="text-indigo-600 hover:text-indigo-900"
      >
        Modifica
      </button>
    </td>
  </tr>
</template>

<script>
import moment from 'moment';
import ProductUpdate from '@/components/admin/products/ProductUpdate';

export default {
  components: { ProductUpdate },
  props: ['id'],
  data() {
    return {
      updateOpen: false,
    };
  },
  computed: {
    product() {
      return this.$store.getters.getProductById(this.id);
    },
    lastChange() {
      return moment(this.product.updated_at).format('D MMMM YYYY');
    },
    creation() {
      return moment(this.product.created_at).format('D MMMM YYYY');
    },
  },
};
</script>
