<script setup>
import Card from "../components/DeathCard.vue";
import { ref, onMounted } from "vue";
const deaths = ref("");
async function getDeath() {
  let res = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json/");
  let data = await res.json();
  deaths.value = data.results;
}

onMounted(() => {
  getDeath();
});
</script>

<style scoped></style>
