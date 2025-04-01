<template>
  <div class="bg-black w-400 h-200">
    <Pie :data="pieData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from "vue";
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

const pieData = computed(() => ({
  labels: props.deaths.map((death) => death.leading_cause),
  datasets: [
    {
      data: props.deaths.map((death) => death.deaths),
      backgroundColor: [
        "#3a5a40",
        "#588157",
        "#a3b18a",
        "#dad7cd",
        "#344e41",
        "#52796f",
        "#84a98c",
        "#cad2c5",
        "#2f3e46",
        "#354f52",
      ],
      borderColor: "#1a1a1a",
      borderWidth: 1,
    },
  ],
}));

const chartOptions = computed(() => ({
  plugins: {
    title: {
      text: "Mortality Distribution",
      color: "#B8B8B8",
      font: {
        family: '"Crimson Text"',
        size: 18,
      },
    },
    legend: {
      labels: {
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
