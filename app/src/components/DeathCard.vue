<template>
  <div>
    <h1>{{ deaths.leading_cause }}</h1>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  deaths: Object,
  year: Number,
});
const deathPath = computed(() => {
  return "/deaths/${props.death.year}";
});
</script>

<style scoped></style>
