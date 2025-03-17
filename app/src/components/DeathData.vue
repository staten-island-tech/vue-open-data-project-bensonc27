<template>
  <div>
    <h2>{{ deaths.year }}</h2>
    <div class="specifics">
      <h1 v-for="death in deaths" :key="death.year">{{ death.leading_cause }}</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const deaths = ref("");
async function getValue() {
  let res = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json/");
  let data = await res.json();
  deaths.value = data;
}

onMounted(() => {
  getValue();
});
</script>

<style scoped></style>
