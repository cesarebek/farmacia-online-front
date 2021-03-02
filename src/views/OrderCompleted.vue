<template>
  <div
    class="flex items-center justify-center h-screen w-screen absolute top-0 bg-gray-200"
  >
    <div
      class="bg-gray-100 md:w-1/2 lg:w-1/3 min-h-1/3 mx-5 text-gray-800 font-semibold text-2xl rounded-xl flex flex-col justify-center items-center p-5 text-center shadow-lg"
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
      <router-link
        to="/"
        class="rounded-full bg-indigo-500 shadow-lg text-white lg:px-5 px-4 lg:py-4 mb-4 py-3 transform duration-500 ease-out hover:-translate-y-1 hover:shadow-xl"
        >Torna alla Homepage</router-link
      >
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
