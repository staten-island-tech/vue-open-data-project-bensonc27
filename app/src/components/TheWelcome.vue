<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const death = ref("");
async function finddeath() {
  let res = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
  let data = await res.json();
  death.value = data.results;
}
</script>

<style lang="" scoped></style>
