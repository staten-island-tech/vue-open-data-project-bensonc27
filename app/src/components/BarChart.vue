<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, Tooltip, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale);

const props = defineProps({
  deaths: {
    type: Array,
  },
});

const chartData = ref({
  labels: props.deaths.map((death) => `${death.leading_cause} (${death.year})`),
  datasets: [
    {
      data: props.deaths.map((d) => d.deaths),
      backgroundColor: ["#FF5733"],
    },
  ],
});
</script>
<style scoped></style>
