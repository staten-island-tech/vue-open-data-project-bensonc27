<script setup>
import { ref, watch } from "vue";
import BarChart from "@/components/BarChart.vue";

const deaths = ref("");
const selectedrace = ref("");

async function getRace() {
  if (!selectedrace.value) return;

  try {
    const response = await fetch(
      `https://data.cityofnewyork.us/resource/jb7j-dtam.json?race_ethnicity=${selectedrace.value}&$limit=20`
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      deaths.value = data;
    }
  } catch (error) {
    console.log(error);
    alert("sorry could not find that");
  }
}

watch(selectedrace, () => {
  getRace();
});
</script>

<template>
  <form>
    <select v-model="selectedrace" name="Ethnicity List" class="">
      <option value="">Select Race</option>
      <option value="Asian and Pacific Islander">Asian and Pacific Islander</option>
      <option value="Black Non-Hispanic">Black Non-Hispanic</option>
      <option value="Hispanic">Hispanic</option>
      <option value="White Non-Hispanic">White Non-Hispanic</option>
    </select>
  </form>

  <div class="w-[1000px] h-[1500px]">
    <h1 class="text-center">Race Statistics</h1>
    <BarChart class="" :deaths="deaths"></BarChart>
  </div>
</template>
