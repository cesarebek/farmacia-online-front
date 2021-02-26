<template>
  <div
    @click.self="this.$emit('closeDetails')"
    class="fixed inset-0 overflow-hidden flex justify-center items-center"
    style="background: rgba(0,0,0,.7);"
  >
    <div class="w-3/4 lg:w-1/2 overflow-y-auto rounded-xl shadow-lg">
      <div class="px-4 py-5 bg-white h-4/5 space-y-6 sm:p-6">
        <p class="text-2xl font-semibold text-gray-700">
          {{ product.title }}
        </p>
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <div class="mt-1 flex rounded-md shadow-sm">
              <input
                v-model="title"
                type="text"
                class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
              />
            </div>
          </div>
        </div>

        <div>
          <label for="about" class="block text-sm font-medium text-gray-700">
            Descrizione
          </label>
          <div class="mt-1">
            <textarea
              v-model="description"
              id="about"
              name="about"
              rows="3"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>

        <div>
          <label for="stock" class="block text-sm font-medium text-gray-700">
            Quantità
          </label>
          <div class="mt-1">
            <input
              v-model="stock"
              id="stock"
              type="number"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label for="prezzo" class="block text-sm font-medium text-gray-700">
            Prezzo
          </label>
          <div class="mt-1">
            <input
              v-model="price"
              id="prezzo"
              type="number"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between">
        <button
          @click="deleteProduct"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Elimina Prodotto
        </button>
        <button
          @click="updateProduct"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Salva le modifiche
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      title: this.product.title,
      description: this.product.description,
      stock: this.product.stock,
      price: this.product.price,
    };
  },
  methods: {
    async updateProduct() {
      await this.$store.dispatch('updateProduct', {
        id: this.product.id,
        title: this.title,
        description: this.description,
        stock: this.stock,
        price: this.price,
      });
      this.$emit('closeDetails');
    },
    async deleteProduct() {
      await this.$store.dispatch('deleteProduct', this.product.id);
      this.$emit('closeDetails');
    },
  },
};
</script>
