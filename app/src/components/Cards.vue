<template>
  <div class="bg-black">
    <h1 class="text-blue-400">Disease: {{ deaths.leading_cause }}</h1>
    <h1 class="text-gray-400">Race: {{ deaths.race_ethnicity }}</h1>
    <h2 class="text-gray-300">Year: {{ deaths.year }}</h2>
    <p class="text-red-300">Deaths: {{ deaths.deaths }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  deaths: Object,
});
</script>
