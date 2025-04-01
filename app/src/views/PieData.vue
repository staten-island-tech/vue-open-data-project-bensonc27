<template>
  <form>
    <select v-model="selectedYear" class="text-black" name="Year">
      <option class="text-black" value="">Select Year</option>
      <option class="text-black" value="2007">2007</option>
      <option class="text-black" value="2008">2008</option>
      <option class="text-black" value="2009">2009</option>
      <option class="text-black" value="2010">2010</option>
      <option class="text-black" value="2011">2011</option>
      <option class="text-black" value="2012">2012</option>
      <option class="text-black" value="2013">2013</option>
      <option class="text-black" value="2014">2014</option>
    </select>
  </form>

  <PieChart :deaths="deaths"></PieChart>
</template>

<script setup>
import { ref, watch } from "vue";
import PieChart from "@/components/PieChart.vue";

const deaths = ref("");
const selectedYear = ref("");

async function getyear() {
  try {
    const response = await fetch(
      `https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=${selectedYear.value}&$limit=10`
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
watch(selectedYear, () => {
  getyear();
});
</script>
