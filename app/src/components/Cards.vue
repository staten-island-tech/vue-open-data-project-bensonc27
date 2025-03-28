<template>
  <div>
    <h1>Disease: {{ deaths.leading_cause }}</h1>
    <h1>Race: {{ deaths.race_ethnicity }}</h1>
    <h2>Year: {{ deaths.year }}</h2>
    <p>Deaths: {{ deaths.deaths }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  deaths: Object,
});
</script>

<style scoped></style>
