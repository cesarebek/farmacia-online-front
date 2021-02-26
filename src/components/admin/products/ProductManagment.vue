<template>
  <NewProduct v-if="newProductOpen" @close-details="newProductOpen = false" />
  <div class="mb-7 flex justify-center">
    <button
      @click="newProductOpen = !newProductOpen"
      class="p-2 rounded-full bg-blue-600 text-white mx-5 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 shadow-md"
    >
      Aggiungi un nuovo prodotto
    </button>
  </div>
  <div class="flex flex-col">
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
                  Prodotto
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Aggiunto il
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ultima modifica
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Disponibilità
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <ProductRow
                v-for="product in products"
                :key="product.id"
                :id="product.id"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductRow from '@/components/admin/products/ProductRow';
import NewProduct from '@/components/admin/products/NewProduct';

export default {
  components: { ProductRow, NewProduct },
  data() {
    return {
      newProductOpen: false,
    };
  },
  async created() {
    await this.$store.dispatch('loadProducts');
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>
