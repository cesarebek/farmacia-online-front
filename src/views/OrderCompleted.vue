<template>
  <div
    class="container mx-auto flex items-center justify-center w-full h-screen absolute top-0"
  >
    <div
      class="w-4/5 md:w-1/2 min-h-1/3 bg-gray-100 text-gray-800 font-semibold text-2xl rounded-xl flex flex-col justify-center items-center p-5 text-center shadow-lg"
    >
      <p>Il tuo ordine è stato completato!</p>
      <svg
        class="text-green-500 h-28 my-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p class="font-normal text-lg">
        Puoi visualizzare tutti i tuoi ordini nella sezione '<span
          class="font-medium"
          >I miei Ordini</span
        >' oppure cliccando direttamente qui:
        <router-link class="hover:underline text-blue-500 " to="/orders"
          >I miei Ordini</router-link
        >
      </p>
    </div>
  </div>
</template>
