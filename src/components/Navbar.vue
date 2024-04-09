<template>
  <nav class="mx-auto my-10 text-center">
    <router-link
      :to="{ name: 'Home' }"
      class="mx-2.5 my-0 border-b-2 pb-1 text-xl text-gray-600 transition duration-200"
      :class="{
        'border-b-green-600': $route.name === 'Home',
        'border-b-transparent': $route.name === 'AddProject',
      }"
      >Projects</router-link
    >
    <router-link
      :to="{ name: 'AddProject' }"
      class="mx-2.5 my-0 border-b-2 pb-1 text-xl text-gray-600 transition duration-200"
      :class="{
        'border-b-green-600': $route.name === 'AddProject',
        'border-b-transparent': $route.name === 'Home',
      }"
      >Add a New Project</router-link
    >
  </nav>
</template>
