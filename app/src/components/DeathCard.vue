<template>
  <router-link :to="deathPath" class="card">
    <h2>{{ deaths_leadingcause }}</h2>
  </router-link>
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
