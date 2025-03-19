<template>
  <h1 class="text-center text-4xl font-bold">Death Statistics</h1>
  <div class="flex flex-wrap p-4 justify-evenl">
    <Card class="m-auto" v-for="(death, index) in deaths" :key="index" :deaths="death"></Card>
  </div>
</template>

<script setup>
import Card from "@/components/DeathCard.vue";
import { ref, onMounted } from "vue";

const deaths = ref([]);
async function getData() {
  try {
    const response = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json/");
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
