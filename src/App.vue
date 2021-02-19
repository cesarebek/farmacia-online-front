<template>
  <div>
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  components: { Navigation },
  async created() {
    await this.$store.dispatch('tryLogin');
    await this.$store.dispatch('loadCategories');
    await this.$store.dispatch('loadProducts');
  },
  updated() {
    console.log(this.$store.getters.cart);
  },
};
</script>
