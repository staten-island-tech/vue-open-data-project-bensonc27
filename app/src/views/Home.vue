<template>
  <div class="container">
    <div class="">// prob should add v for here ltr</div>
  </div>
</template>

<script setup>
import Card from "@/components/DeathCard.vue";
import { ref, onMounted } from "vue";
const deaths = ref([]);
async function getValue() {
  let res = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json/");
  let data = await res.json();
  deaths.value = data.results;
}
onMounted(() => {
  getValue();
});
</script>

<style scoped></style>
