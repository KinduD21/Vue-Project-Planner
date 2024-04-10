<template>
  <FilterNav @filterChange="current = $event" :current="current" />
  <ul
    v-if="projects.length"
    class="flex w-full flex-col items-center gap-5 px-5"
  >
    <ProjectItem
      v-for="project in filteredProjects"
      :key="project.id"
      :project="project"
      @delete="handleDelete"
      @complete="handleComplete"
    />
  </ul>
</template>

<script setup>
import { supabase } from "../lib/supabaseClient.js";
import ProjectItem from "../components/ProjectItem.vue";
import FilterNav from "../components/FilterNav.vue";
import { ref, onMounted, computed } from "vue";

const projects = ref([]);
const current = ref("all");

onMounted(async () => {
  const { data } = await supabase.from("projects").select();
  projects.value = data;
});

function handleComplete(id) {
  let p = projects.value.find((project) => {
    return project.id === id;
  });
  p.complete = !p.complete;
}

function handleDelete(id) {
  projects.value = projects.value.filter((project) => {
    return project.id !== id;
  });
}

const filteredProjects = computed(() => {
  if (current.value === "completed") {
    return projects.value.filter((project) => project.complete);
  } else if (current.value === "ongoing") {
    return projects.value.filter((project) => !project.complete);
  } else {
    return projects.value;
  }
});
</script>
