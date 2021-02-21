<template>
  <div class="container mx-auto mt-10">
    <div class="flex flex-col md:flex-row shadow-md my-10">
      <!--  -->

      <div class="w-full md:w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Carrello</h1>
          <h2 class="font-semibold text-2xl">
            {{ itemsCounter }} {{ wordItem }}
          </h2>
        </div>
        <div class="flex mt-10 mb-5" v-if="itemsCounter === 0">
          <h1 class="font-semibold text-gray-600 text-xs uppercase">
            Non hai nessun articolo nel carrello
          </h1>
        </div>
        <div class="hidden sm:flex mt-10 mb-5" v-else>
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
            Dettagli del prodotto
          </h3>
          <h3
            class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5"
          >
            Quantità
          </h3>
          <h3
            class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5"
          >
            Prezzo Unitario
          </h3>
          <h3
            class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5"
          >
            Totale
          </h3>
        </div>

        <!-- Prodotti -->

        <CartItem
          v-for="(item, index) in cartProducts"
          :key="item.id"
          :title="item.title"
          :price="item.price"
          :quantity="item.quantity"
          :image="item.image"
          :id="item.id"
          :index="index"
          :stock="item.stock"
        />

        <router-link
          to="/shop"
          class="flex font-semibold text-indigo-600 text-sm mt-10"
        >
          <svg
            class="fill-current mr-2 text-indigo-600 w-4"
            viewBox="0 0 448 512"
          >
            <path
              d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
            />
          </svg>
          Continua lo shopping
        </router-link>
      </div>

      <div id="summary" class="w-full md:w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Riassunto Ordine</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">
            {{ itemsCounter }} {{ wordItem }}</span
          >
          <span class="font-semibold text-sm">{{ cartAmount }} €</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase"
            >Spedizione</label
          >
          <select
            class="block p-2 text-gray-600 w-full text-sm"
            v-model="shipping"
          >
            <option value="9.90">Spedizione Standart - € 9.90</option>
            <option value="15.90">Spedizione Espressa - € 15.90</option>
          </select>
        </div>

        <div class="border-t mt-8">
          <div
            class="flex font-semibold justify-between py-6 text-sm uppercase"
          >
            <span>Totale</span>
            <span>€ {{ bigTotal }}</span>
          </div>
          <button
            :disabled="completeOrder"
            @click="makeOrder"
            class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
          >
            Effettua l'ordine
          </button>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem';
export default {
  components: { CartItem },
  data() {
    return {
      shipping: 0,
    };
  },
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
    cartAmount() {
      return this.$store.getters.cartAmount;
    },
    itemsCounter() {
      return this.$store.getters.itemsCounter;
    },
    bigTotal() {
      return this.cartAmount + parseInt(this.shipping);
    },
    wordItem() {
      return this.itemsCounter === 1 ? 'Prodotto' : 'Prodotti';
    },
    completeOrder() {
      return this.shipping === 0 || this.itemsCounter === 0;
    },
  },
  methods: {
    async makeOrder() {
      const order = this.cartProducts.map((product) => {
        return {
          product_id: product.id,
          quantity: product.quantity,
        };
      });
      const res = await this.$axios.post('/orders/new', { cart: order });
      console.log(res);
      this.$router.replace('/order-completed');
    },
  },
};
</script>
