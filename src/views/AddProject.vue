<template>
  <form
    @submit.prevent="handleSubmit"
    class="mx-auto mt-10 max-w-2xl rounded-xl bg-white p-5"
  >
    <label
      class="mb-2.5 mt-5 block text-sm font-bold uppercase tracking-wider text-gray-400"
      >Title:</label
    >
    <input
      type="text"
      v-model="title"
      required
      class="box-border w-full border-b border-gray-300 p-2.5"
    />
    <label
      class="mb-2.5 mt-5 block text-sm font-bold uppercase tracking-wider text-gray-400"
      >Details:</label
    >
    <textarea
      v-model="details"
      required
      class="box-border h-24 w-full border-b border-gray-300 p-2.5"
    ></textarea>
    <button
      @click="addProject"
      class="mx-auto mb-0 mt-5 block rounded-md bg-green-600 p-2.5 text-base text-white"
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
