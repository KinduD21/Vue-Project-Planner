<template>
  <nav class="mx-auto max-w-2xl text-left">
    <button
      @click="updateFilter('all')"
      class="mr-6 cursor-pointer text-sm font-bold uppercase tracking-wider text-gray-400"
      :class="{ 'text-gray-600': current === 'all' }"
    >
      View All
    </button>
    <button
      @click="updateFilter('completed')"
      class="mr-6 cursor-pointer text-sm font-bold uppercase tracking-wider text-gray-400"
      :class="{ 'text-gray-600': current === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      class="mr-6 cursor-pointer text-sm font-bold uppercase tracking-wider text-gray-400"
      :class="{ 'text-gray-600': current === 'ongoing' }"
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
