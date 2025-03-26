<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { defineProps, computed } from "vue";
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const props = defineProps({
  deaths: {
    type: Array,
  },
});

const chartData = computed(() => ({
  labels: props.deaths.map((d) => `${d.leading_cause} (${d.year})`),
  datasets: [
    {
      label: "Number of Deaths",
      data: props.deaths.map((d) => d.deaths),
      backgroundColor: "blue",
    },
  ],
}));
</script>

<style scoped></style>
