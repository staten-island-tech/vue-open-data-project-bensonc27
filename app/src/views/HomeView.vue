<template>
  <h1 class="text-center text-4xl font-bold">Death Statistics</h1>
  <div class="flex flex-col p-4">
    <Card class="mt-12" v-for="death in deaths" :key="index" :deaths="death"></Card>
  </div>
</template>

<script setup>
import Card from "@/components/Cards.vue";
import { ref, onMounted } from "vue";

const deaths = ref([]);
async function getData() {
  try {
    const response = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json?$limit=50");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      deaths.value = data;
    }
  } catch (error) {
    console.log(error);
    alert("sorry could not find that");
  }
}

onMounted(() => {
  getData();
});
</script>

<style scoped></style>
