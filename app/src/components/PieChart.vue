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
      backgroundColor: [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#FF33A1",
        "#F0E130",
        "#E133FF",
        "#FF8133",
        "#33FFBD",
        "#FFC433",
        "#FF33D1",
      ],
    },
  ],
});
</script>

<template>
  <div class="w-[1000px] h-[600px]">
    <Pie :data="pieData" :options="chartOptions" />
  </div>
</template>
