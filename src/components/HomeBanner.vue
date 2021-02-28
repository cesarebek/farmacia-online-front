<template>
  <div class="h-96">
    <div
      class="bg-cover h-full bg-top relative"
      :style="{ backgroundImage: `url(${backgroundCover})` }"
    >
      <div class="inset-center flex flex-col items-center space-y-4">
        <p
          class="block text-white font-semibold text-5xl lg:text-6xl text-shadow-xl text-center"
        >
          Benvenuto nella parafarmacia a casa tua!
        </p>
        <router-link
          to="/shop"
          class="rounded-full bg-indigo-500 shadow-lg text-white lg:px-5 px-4 lg:py-4 py-3 transform duration-500 ease-out hover:-translate-y-1 hover:shadow-xl"
          >Vai al Catalogo</router-link
        >
        <!-- <h1
          class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center px-96"
        >
          <span class="block xl:inline">Qualche dubbio sulla</span>
          <span class="block text-indigo-600 xl:inline">
            terapia da seguire?</span
          >
        </h1> -->
      </div>
    </div>
  </div>
</template>

<script>
import homeCover from '@/assets/images/homeCover.png';

export default {
  data() {
    return {
      backgroundCover: homeCover,
    };
  },
};
</script>
