<template>
  <div><Card v-for="death in deaths" :deaths="deaths" :key="death.leading_cause"></Card></div>
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
      deaths.value = data.results;
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
