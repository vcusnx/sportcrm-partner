import { createRouter, createWebHistory } from "vue-router";
import Registration from "../views/Registration.vue";
import Application from "../views/Application.vue";
import Events from "../views/Events.vue";
import Info from "../views/Info.vue";
import Partners from "../views/Partners.vue";
import Payments from "../views/Payments.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  { path: "/registration", component: Registration },
  { path: "/application", component: Application },
  { path: "/events", component: Events },
  { path: "/info", component: Info },
  { path: "/partners", component: Partners },
  { path: "/payments", component: Payments },
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
