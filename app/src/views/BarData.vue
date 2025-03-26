<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import BarChart from "@/components/BarChart.vue";

const deaths = ref("");
const route = useRoute();
const router = useRouter();

const inputrace = (event) => {
  const selected = event.target.value;
  router.push(`/barchart/${selected}`);
  getRace();
};

async function getRace() {
  try {
    const response = await fetch(
      `https://data.cityofnewyork.us/resource/jb7j-dtam.json?race_ethnicity=${route.params.race_ethnicity}&$limit=50`
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

onMounted(() => {
  getRace();
});
</script>

<template>
  <h1>Select Race</h1>
  <form>
    <select @change="inputrace" name="Ethnicity List" class="">
      <option value="">Select Race</option>
      <option value="Asian and Pacific Islander">Asian and Pacific Islander</option>
      <option value="Black Non-Hispanic">Black Non-Hispanic</option>
      <option value="Hispanic">Hispanic</option>
      <option value="White Non-Hispanic">White Non-Hispanic</option>
    </select>
  </form>

  <BarChart :deaths="deaths"></BarChart>
</template>
