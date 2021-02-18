<template>
  <div class="h-screen">
    <div
      class="min-h-1/2 bg-red-400 bg-cover bg-top relative"
      :style="{ backgroundImage: `url(${backgroundCover})` }"
    >
      <div class="inset-center flex flex-col items-center space-y-4">
        <h1
          class="text-white font-semibold text-3xl text-shadow-lg text-center"
        >
          Benvuto nella parafarmacia a casa tua
        </h1>
        <router-link
          to="/banco"
          class="rounded-full bg-white shadow-md px-4 py-3 transform duration-500 ease-out hover:-translate-y-1 hover:shadow-lg"
          >Vai al Catalogo</router-link
        >
      </div>
    </div>
    <div class="container mx-auto my-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 mx-5 gap-6">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :name="category.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import homeCover from '@/assets/images/homeCover.png';
import CategoryCard from '@/components/CategoryCard';

export default {
  components: { CategoryCard },
  data() {
    return {
      categories: [],
      backgroundCover: homeCover,
    };
  },
  async created() {
    const res = await this.$axios.get('categories');
    this.categories = res.data.data;
  },
};
</script>
