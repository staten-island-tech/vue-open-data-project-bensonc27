<template>
  <div><Card v-for="death in deaths" :key="death.leading_cause"></Card></div>
</template>

<script setup>
import Card from "@/components/DeathCard.vue";
import { ref, onMounted } from "vue";
const deaths = ref([]);
async function getValue() {
  let res = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json/");
  let data = await res.json();
  deaths.value = data.results;
}
console.log(deaths.value);
onMounted(() => {
  getValue();
});
</script>

<style scoped></style>
