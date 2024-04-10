<template>
  <form
    @submit.prevent
    class="mt-10 w-full max-w-2xl rounded-xl bg-white p-5 dark:bg-gray-600"
  >
    <label
      class="mb-2.5 mt-5 block text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-200"
      >Title: <span class="text-red-600">*</span></label
    >
    <input
      type="text"
      v-model="title"
      required
      class="box-border w-full rounded-md border-b border-gray-300 p-2.5 focus-visible:outline-green-600"
    />
    <label
      class="mb-2.5 mt-5 block text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-200"
      >Details:</label
    >
    <textarea
      v-model="details"
      class="box-border h-24 w-full rounded-md border-b border-gray-300 p-2.5 focus-visible:outline-green-600"
    ></textarea>
    <button
      @click="addProject"
      class="mb-0 mt-5 block rounded-md bg-green-600 p-2.5 text-base text-white"
      :class="{ 'pointer-events-none opacity-50': !title }"
    >
      Add Project
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../lib/supabaseClient";

const router = useRouter();

const title = ref("");
const details = ref("");

async function addProject() {
  const newProject = {
    title: title.value,
    details: details.value,
    complete: false,
  };

  await supabase
    .from("projects")
    .insert(newProject)
    .then(() => {
      router.push("/");
    });
}
</script>
