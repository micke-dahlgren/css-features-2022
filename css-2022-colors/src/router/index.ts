import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import AccentColor from "../views/AccentColor.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/accent-color",
    name: "AccentColor",
    component: AccentColor,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;