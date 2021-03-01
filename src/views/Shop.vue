<template>
  <div class="container mx-auto min-h-screen">
    <div class="flex items-center justify-between m-5" v-if="isQuery">
      <p class="text-2xl font-semibold text-gray-700">
        Stai visitando la categoria
        <span class="text-indigo-700 font-bold">{{ categoryName }}</span>
      </p>
      <router-link
        to="/"
        class="px-6 py-3 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
        >Torna alle categorie</router-link
      >
    </div>
    <div class="grid mx-5 md:grid-cols-3 gap-5">
      <transition-group name="product" mode="out-in">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :image="product.product_image"
          :id="product.id"
          :stock="product.stock"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard';

export default {
  components: { ProductCard },
  data() {
    return {
      products: [],
      isQuery: null,
    };
  },
  mounted() {
    if (this.$route.query.category_id) {
      this.isQuery = this.$route.query.category_id;
      return (this.products = this.getProductsByCategory);
    } else {
      this.isQuery = null;
      return (this.products = this.allProducts);
    }
  },
  computed: {
    allProducts() {
      return this.$store.getters.products;
    },
    getProductsByCategory() {
      return this.$store.getters.getProductsByCategory(
        this.$route.query.category_id
      );
    },
    categoryName() {
      return this.$store.getters.getNameCategoryById(this.isQuery).name;
    },
  },
};
</script>

<style scoped>
/* Animations */
.product-enter-from {
  opacity: 0;
  transform: scale(1.1);
}
.product-enter-active {
  transition: all 0.3s ease-out;
}
.product-enter-to {
  opacity: 1;
  transform: scale(1);
}

.product-leave-from {
  opacity: 1;
  transform: scale(1);
}
.product-leave-active {
  transition: all 0.3s ease-in;
}
.product-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
