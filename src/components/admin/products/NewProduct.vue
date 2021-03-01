<template>
  <div
    @click.self="this.$emit('closeDetails')"
    class="fixed inset-0 overflow-hidden flex justify-center items-center"
    style="background: rgba(0,0,0,.7);"
  >
    <div class="w-3/4 lg:w-1/2 h-4/5 overflow-y-auto rounded-xl shadow-lg">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <form enctype="multipart/form-data">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <p class="text-2xl font-semibold text-gray-700">
              Nuovo Prodotto
            </p>
            <div>
              <label
                for="title"
                class="block text-sm font-medium text-gray-700"
              >
                Titolo
              </label>
              <div class="mt-1">
                <input
                  v-model="title"
                  id="title"
                  type="text"
                  placeholder="Esempio: Oki Task"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                for="about"
                class="block text-sm font-medium text-gray-700"
              >
                Descrizione
              </label>
              <div class="mt-1">
                <textarea
                  v-model="description"
                  id="about"
                  name="about"
                  rows="3"
                  placeholder="Esempio: Un farmaco adatto per molteplici dolori che puoi sempre portare con te."
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>

            <div>
              <label
                for="stock"
                class="block text-sm font-medium text-gray-700"
              >
                Quantità
              </label>
              <div class="mt-1">
                <input
                  v-model="stock"
                  id="stock"
                  type="number"
                  placeholder="Esempio: 50"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                for="prezzo"
                class="block text-sm font-medium text-gray-700"
              >
                Prezzo in Euro
              </label>
              <div class="mt-1">
                <input
                  v-model="price"
                  id="prezzo"
                  type="number"
                  placeholder="Esempio: 13.90"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                for="category"
                class="block text-sm font-medium text-gray-700"
              >
                Categoria
              </label>
              <div>
                <select
                  v-model="category_id"
                  id="category"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                    >{{ category.name }}</option
                  >
                </select>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Immagine prodotto
              </label>
              <div
                class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex flex-col text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Carica la copertina</span>
                      <input
                        @change="onSelectFile"
                        id="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <span>{{ fileName }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              @click.prevent="newProduct"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Aggiungi il prodotto
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      category_id: null,
      stock: '',
      price: '',
      image: null,
    };
  },

  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    fileName() {
      return this.image ? this.image.name : 'No file uploaded';
    },
  },
  methods: {
    onSelectFile(e) {
      this.image = e.target.files[0];
    },
    async newProduct() {
      const data = new FormData();
      data.append('title', this.title);
      data.append('description', this.description);
      data.append('stock', this.stock);
      data.append('category_id', this.category_id);
      data.append('price', this.price);
      data.append('product_image', this.image);

      await this.$store.dispatch('newProduct', data);
      this.$emit('closeDetails');
    },
  },
};
</script>
