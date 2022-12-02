import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import AccentColor from "../views/AccentColor.vue";
import Colorv1Fonts from "../views/Colorv1Fonts.vue";

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
  {
    path: "/COLORv1-fonts",
    name: "Colorv1Fonts",
    component: Colorv1Fonts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;