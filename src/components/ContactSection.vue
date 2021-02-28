<template>
  <div class="mb-10 sm:mb-0">
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

          <div
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          ></div>

          <main
            class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="text-center lg:text-left">
              <h1
                class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span class="block xl:inline">Qualche dubbio sulla</span>
                <span class="block text-indigo-600 xl:inline">
                  terapia da seguire?</span
                >
              </h1>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Contattaci per avere il supporto dei nostri farmacisti su
                parafarmaci, integratori e tanti altri prodotti!
              </p>
              <button
                @click="this.$router.push('/contact')"
                class="mt-5 text-md px-6 py-3 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                Contattaci ora!
              </button>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div
          :style="{ backgroundImage: `url(${farmacista})` }"
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import farmacista from '@/assets/images/farmacista.jpg';
export default {
  data() {
    return {
      farmacista,
    };
  },
};
</script>
