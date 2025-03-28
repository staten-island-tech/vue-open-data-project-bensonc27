import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BarData from "../views/BarData.vue";
import PieChart from "../views/PieData.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    { path: "/barchart/", name: "BarData", component: BarData },
    { path: "/piechart/", name: "PieChart", component: PieChart },
  ],
});

export default router;
