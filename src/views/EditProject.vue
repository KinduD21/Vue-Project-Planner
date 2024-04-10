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
      @click="editProject"
      class="mb-0 mt-5 block rounded-md bg-green-600 p-2.5 text-base text-white"
      :class="{ 'pointer-events-none opacity-50': !title }"
    >
      Edit Project
    </button>
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "vue-router";

const props = defineProps({
  id: String,
});

const router = useRouter();

const title = ref("");
const details = ref("");

onMounted(async () => {
  const { data } = await supabase.from("projects").select().eq("id", props.id);
  title.value = data[0].title;
  details.value = data[0].details;
});

async function editProject() {
  const updatedProject = {
    title: title.value,
    details: details.value,
  };

  await supabase
    .from("projects")
    .update(updatedProject)
    .eq("id", props.id)
    .then(() => {
      router.push("/");
    });
}
</script>
