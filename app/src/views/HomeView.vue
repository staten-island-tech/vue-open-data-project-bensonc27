<template>
  <div class="grid grid-cols-3 gap-6 p-4">
    <Card
      class="shadow-lg border-2 border-gray-300 p-4 rounded-lg"
      v-for="(death, index) in deaths"
      :key="index"
      :deaths="death"
    />
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
