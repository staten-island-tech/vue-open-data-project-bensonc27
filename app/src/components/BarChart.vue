<template>
  <div class="w-325 h-500 p-6 rounded-lg shadow-md">
    <h1 class="text-center font-bold text-gray-200 mb-6 text-4xl">Race Statistics</h1>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, Tooltip, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale);

const props = defineProps({
  deaths: {
    type: Array,
  },
});

const chartData = computed(() => ({
  labels: props.deaths.map((death) => `${death.leading_cause} (${death.year})`),
  datasets: [
    {
      data: props.deaths.map((d) => d.deaths),
      backgroundColor: ["#D10000"],
    },
  ],
}));

const chartOptions = computed(() => ({
  scales: {
    x: {
      ticks: {
        color: "#B8B8B8",
        font: {
          family: '"Crimson Text"',
          size: 12,
        },
      },
    },
    y: {
      ticks: {
        color: "#B8B8B8",
        font: {
          family: '"Crimson Text"',
          size: 12,
        },
      },
    },
  },
}));
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600;700&display=swap");
</style>
