<template>
  <div
    :class="{ dark: isDark }"
    class="flex h-screen flex-col items-center justify-start gap-5 pt-10 dark:bg-gray-700"
  >
    <button
      @click="isDark = !isDark"
      class="mb-2 flex items-center gap-2 rounded-lg border border-gray-500 px-4 py-2 text-base font-bold transition duration-500 dark:border-white dark:text-white"
    >
      Switch Theme
      <span v-if="!isDark" class="material-icons"> dark_mode </span>
      <span v-else class="material-icons text-white"> light_mode </span>
    </button>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";

const isDark = ref(false);
</script>
