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
      class="box-border w-full border-b border-gray-300 p-2.5 focus-visible:outline-green-600"
    />
    <label
      class="mb-2.5 mt-5 block text-sm font-bold uppercase tracking-wider text-gray-400"
      >Details:</label
    >
    <textarea
      v-model="details"
      required
      class="box-border h-24 w-full border-b border-gray-300 p-2.5 focus-visible:outline-green-600"
    ></textarea>
    <button
      @click="editProject"
      class="mx-auto mb-0 mt-5 block rounded-md bg-green-600 p-2.5 text-base text-white"
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
