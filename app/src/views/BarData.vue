<script setup>
import { ref, onMounted } from "vue";
const deaths = ref("");
async function getRace() {
  let res = await fetch(
    `https://data.cityofnewyork.us/resource/jb7j-dtam.json?race_ethnicity=&?$limit=50`
  );
  let data = await res.json();
  deaths.value = data.results;
}

onMounted(() => {
  getRace();
});
</script>

<template></template>
