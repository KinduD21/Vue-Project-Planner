<template>
  <li
    class="box-border flex w-full max-w-2xl items-start justify-between rounded border-l-4 bg-white px-5 py-8 shadow-md ring-1 ring-gray-300 ring-opacity-50 dark:bg-gray-600 dark:ring-gray-700"
    :class="{
      'border-l-green-600': props.project.complete,
      'border-l-red-600': !props.project.complete,
    }"
  >
    <div class="flex-grow">
      <h3
        class="cursor-pointer text-2xl font-bold text-gray-700 dark:text-white"
        @click="showDetails = !showDetails"
      >
        {{ project.title }}
      </h3>
      <p class="ml-2 mt-7 text-lg dark:text-white" v-if="showDetails">
        {{ project.details }}
      </p>
    </div>
    <div>
      <router-link
        :to="{ name: 'EditProject', params: { id: props.project.id } }"
      >
        <span
          class="material-icons ml-2 cursor-pointer text-3xl text-gray-400 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
        >
          edit
        </span>
      </router-link>
      <span
        @click="deleteProject"
        class="material-icons ml-2 cursor-pointer text-3xl text-gray-400 hover:text-red-500 dark:text-white"
      >
        delete
      </span>
      <span
        @click="toggleComplete"
        :class="{
          'text-green-600 dark:text-green-600': props.project.complete,
        }"
        class="material-icons ml-2 cursor-pointer text-3xl font-bold text-gray-400 hover:text-green-700 dark:text-white"
      >
        done
      </span>
    </div>
  </li>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient";

const props = defineProps({
  project: Object,
});

const emit = defineEmits(["delete", "complete"]);

const showDetails = ref(false);

async function toggleComplete() {
  await supabase
    .from("projects")
    .update({ complete: !props.project.complete })
    .eq("id", props.project.id)
    .then(() => emit("complete", props.project.id));
}

async function deleteProject(e) {
  await supabase
    .from("projects")
    .delete()
    .eq("id", props.project.id)
    .then(() => emit("delete", props.project.id));
  e.target.closest("li").remove();
}
</script>
