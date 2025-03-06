<template>
  <router-link :to=""> </router-link>
</template>

<script setup>
const props = defineProps({});

const pkmnPath = computer(() => {
  return `/pokemon/${props.id}`;
});
</script>

<style scoped></style>
