<template>
  <router-link :to="deathPath">
    <h1>{{ death.leading_cause }}</h1>
  </router-link>
</template>

<script setup>
const props = defineProps({
  death: {
    type: Object,
  },
  year: {
    type: Number,
  },
});

const deathPath = computer(() => {
  return `/death/${props.year}`;
});
</script>

<style scoped></style>
