<template>
  <div class="container mx-auto min-h-screen">
    <div class="grid mx-5 md:grid-cols-3 gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :price="product.price"
        :image="product.product_image"
        :id="product.id"
        :stock="product.stock"
      />
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
    };
  },
  mounted() {
    console.log(this.$route);
    if (Object.keys(this.$route.query).length !== 0) {
      return (this.products = this.filterProducts);
    } else {
      return (this.products = this.allProducts);
    }
  },
  updated() {
    console.log(this.$route);
    if (Object.keys(this.$route.query).length !== 0) {
      return (this.products = this.filterProducts);
    } else {
      return (this.products = this.allProducts);
    }
  },
  computed: {
    allProducts() {
      return this.$store.getters.products;
    },
    filterProducts() {
      return this.allProducts.filter((product) => {
        return product.category_id == this.$route.query.category_id;
      });
    },
  },
};
</script>
