<template>
  <div class="h-96">
    <div
      class=" bg-red-400 bg-cover h-full bg-top relative"
      :style="{ backgroundImage: `url(${backgroundCover})` }"
    >
      <div class="inset-center flex flex-col items-center space-y-4">
        <h1
          class="text-white font-semibold text-3xl text-shadow-lg text-center"
        >
          Benvuto nella parafarmacia a casa tua
        </h1>
        <router-link
          to="/shop"
          class="rounded-full bg-white shadow-md px-4 py-3 transform duration-500 ease-out hover:-translate-y-1 hover:shadow-lg"
          >Vai al Catalogo</router-link
        >
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
