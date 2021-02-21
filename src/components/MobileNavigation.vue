<template>
  <div class="bg-white w-full border-t border-gray-200 flex">
    <router-link
      to="/"
      class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
    >
      <div class="text-center">
        <span class="flex justify-center h-8 text-3xl leading-8">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </span>
        <span class="block text-xs leading-none">Home</span>
      </div>
    </router-link>
    <router-link
      to="/shop"
      class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
    >
      <div class="text-center">
        <span class="flex justify-center h-8 text-3xl leading-8">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </span>
        <span class="block text-xs leading-none">Shop</span>
      </div>
    </router-link>
    <router-link
      to="/orders"
      class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
    >
      <div class="text-center">
        <span class="flex justify-center h-8 text-3xl leading-8">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </span>
        <span class="block text-xs leading-none">Ordini</span>
      </div>
    </router-link>
    <router-link
      to="/contact"
      class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
    >
      <div class="text-center">
        <span class="flex justify-center h-8 text-3xl leading-8">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
        </span>
        <span class="block text-xs leading-none">Contattaci</span>
      </div>
    </router-link>
  </div>
</template>
