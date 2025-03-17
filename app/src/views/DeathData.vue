<template>
  <div>
    <div v-for="deathcounts in death" :key="death.name">
      <h1>{{ death.leading_cause }}</h1>
      <h2>{{ death.year }}</h2>
      <h3>{{ death.deaths }}</h3>
      <h3>{{ death.sex }}</h3>
      <
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const death = ref("");
async function getDeath() {
  let res = await fetch();
  let data = await res.json();
  death.value = data.results;
}
</script>

<style scoped></style>
