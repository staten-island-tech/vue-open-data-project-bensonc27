<template class="">
  <div class="justify-center items-center">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/barchart/">BarChart</RouterLink>
    <RouterLink to="/piechart">PieChart</RouterLink>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
