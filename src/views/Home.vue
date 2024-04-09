<template>
  <ul
    v-if="projects.length"
    class="mx-auto my-10 flex max-w-2xl flex-col items-center justify-center gap-5"
  >
    <ProjectItem
      v-for="project in projects"
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
import { ref, onMounted } from "vue";

const projects = ref([]);

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
</script>
