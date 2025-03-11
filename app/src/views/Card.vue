<template>
  <div class="container"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const death = ref("");
async function getDeath() {
  let res = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json/");
  let data = await res.json();
  death.value = data.results;
  console.log(death.leading_cause);
}

onMounted(() => {
  getDeath();
});
</script>

<style></style>
