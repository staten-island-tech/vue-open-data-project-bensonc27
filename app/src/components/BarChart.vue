<template>
  <h1>Select Race</h1>
  <div>
    <form>
      <select name="Ethnicity List" class="">
        <option value="">Select Race</option>
        <option value="Asian and Pacific Islander">Asian and Pacific Islander</option>
        <option value="Black Non-Hispanic">Black Non-Hispanic</option>
        <option value="Hispanic">Hispanic</option>
        <option value="Not Stated/Unknown">Not Stated/Unknown</option>
        <option value="Other Race/ Ethnicity">Other Race/ Ethnicity</option>
        <option value="White Non-Hispanic">White Non-Hispanic</option>
      </select>
    </form>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  deaths: Object,
});
const deathPath = computed(() => {
  return `/deaths/${props.death.year}`;
});
</script>

<style scoped></style>
