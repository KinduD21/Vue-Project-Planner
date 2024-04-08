<template>
  <li
    class="relative box-border max-h-96 w-full rounded border-l-4 border-l-red-600 bg-white p-5 shadow-md ring-1 ring-gray-300 ring-opacity-50"
  >
    <h3
      class="cursor-pointer text-2xl font-bold"
      @click="showDetails = !showDetails"
    >
      {{ project.title }}
    </h3>
    <div class="absolute right-5 top-5">
      <span
        class="material-icons ml-2 cursor-pointer text-2xl text-gray-400 hover:text-gray-600"
      >
        edit
      </span>
      <span
        @click="deleteProject"
        class="material-icons ml-2 cursor-pointer text-2xl text-gray-400 hover:text-gray-600"
      >
        delete
      </span>
      <span
        class="material-icons ml-2 cursor-pointer text-2xl text-gray-400 hover:text-gray-600"
      >
        done
      </span>
    </div>
    <p class="ml-px mt-4 text-lg" v-if="showDetails">{{ project.details }}</p>
  </li>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient";

const props = defineProps({
  project: Object,
});

const showDetails = ref(false);

async function deleteProject(e) {
  await supabase.from("projects").delete().eq("id", props.project.id);
  e.target.closest("li").remove();
}
</script>
