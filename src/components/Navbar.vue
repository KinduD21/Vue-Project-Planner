<template>
  <nav class="text-center">
    <router-link
      :to="{ name: 'Home' }"
      class="mx-2.5 my-0 border-b-2 pb-1 text-xl text-gray-600 transition duration-200 dark:text-white"
      :class="{
        'border-b-green-600': $route.name === 'Home',
        'border-b-transparent':
          $route.name === 'AddProject' || $route.name === 'EditProject',
      }"
      >Projects</router-link
    >
    <router-link
      :to="{ name: 'AddProject' }"
      class="mx-2.5 my-0 border-b-2 pb-1 text-xl text-gray-600 transition duration-200 dark:text-white"
      :class="{
        'border-b-green-600': $route.name === 'AddProject',
        'border-b-transparent':
          $route.name === 'Home' || $route.name === 'EditProject',
      }"
    >
      Add a New Project
    </router-link>
  </nav>
</template>
