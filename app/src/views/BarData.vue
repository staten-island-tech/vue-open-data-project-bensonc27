<template>
  <form class="bg-black">
    <select v-model="selectedrace" class="text-white" name="Ethnicity List">
      <option class="text-black" value="">Select Race</option>
      <option class="text-black" value="Asian and Pacific Islander">
        Asian and Pacific Islander
      </option>
      <option class="text-black" value="Black Non-Hispanic">Black Non-Hispanic</option>
      <option class="text-black" value="Hispanic">Hispanic</option>
      <option class="text-black" value="White Non-Hispanic">White Non-Hispanic</option>
    </select>
  </form>

  <div class="bg-black w-[1000px] h-[1500px]">
    <BarChart class="" :deaths="deaths"></BarChart>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import BarChart from "@/components/BarChart.vue";

const deaths = ref("");
const selectedrace = ref("");

async function getRace() {
  try {
    const response = await fetch(
      `https://data.cityofnewyork.us/resource/jb7j-dtam.json?race_ethnicity=${selectedrace.value}&$limit=15`
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
