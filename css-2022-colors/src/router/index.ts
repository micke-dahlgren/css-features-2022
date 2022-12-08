import { createWebHistory, createRouter } from "vue-router";
import Layers from "../views/Layers.vue";
import AccentColor from "../views/AccentColor.vue";
import Colorv1Fonts from "../views/Colorv1Fonts.vue";
import Colorv1Emojis from "../views/Colorv1Emojis.vue";

const routes = [
  {
    path: "/",
    name: "Layers",
    component: Layers,
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
  {
    path: "/COLORv1-emojis",
    name: "Colorv1Emojis",
    component: Colorv1Emojis,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router;