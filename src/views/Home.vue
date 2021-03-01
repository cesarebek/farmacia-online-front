<template>
  <div>
    <HomeBanner />
    <CategorySection />
    <ContactSection />
  </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner';
import CategorySection from '@/components/CategorySection';
import ContactSection from '@/components/ContactSection';

export default {
  components: { CategorySection, HomeBanner, ContactSection },
};
</script>
