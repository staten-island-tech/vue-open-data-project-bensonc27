<script setup>
import { ref } from "vue";
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const props = defineProps({
  deaths: {
    type: Array,
  },
});

const pieData = ref({
  labels: props.deaths.map((death) => death.leading_cause),
  datasets: [
    {
      data: props.deaths.map((death) => death.deaths),
    },
  ],
});
</script>

<template>
  <Pie :data="pieData" />
</template>
