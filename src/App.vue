<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from '@/components/Navigation';
export default {
  components: { Navigation },
  created() {
    this.$store.dispatch('tryLogin');
  },
};
</script>
