<template></template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const deaths = ref("");
async function getDeath() {
  let res = await fetch("");
  let data = await res.json();
  deaths.value = data.results;
}
</script>

<style scoped></style>
