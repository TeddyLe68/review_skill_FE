import { createRouter, createWebHistory } from "vue-router";
import LayoutCommon from "../layouts/LayoutCommon.vue";
import Home from "../pages/Home.vue";
import UpdateProfile from "../pages/UpdateProfile.vue";

const routes = [
  {
    path: "/",
    component: LayoutCommon,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "update-profile",
        component: UpdateProfile,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
