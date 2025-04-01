<template>
  <div class="flex flex-wrap justify-between gap-4">
    <Card
      class="w-[30%] shadow-lg border-2 border-gray-300 p-4 rounded-lg"
      v-for="death in deaths"
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
