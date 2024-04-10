<template>
  <nav class="mt-5 text-left">
    <button
      @click="updateFilter('all')"
      class="mr-6 cursor-pointer text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500"
      :class="{ 'text-gray-600 dark:text-gray-300': current === 'all' }"
    >
      View All
    </button>
    <button
      @click="updateFilter('completed')"
      class="mr-6 cursor-pointer text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500"
      :class="{ 'text-gray-600 dark:text-gray-300': current === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      class="mr-6 cursor-pointer text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500"
      :class="{ 'text-gray-600 dark:text-gray-300': current === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<script setup>
const props = defineProps({
  current: String,
});
const emit = defineEmits(["filterChange"]);

function updateFilter(state) {
  emit("filterChange", state);
}
</script>
