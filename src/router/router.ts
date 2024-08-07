import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Info from "../views/Info.vue";
import Application from "../views/Application.vue";
import Partners from "../views/Partners.vue";
import Registration from "../views/Registration.vue";
import Payments from "../views/Payments.vue";
import Events from "../views/Events.vue";

const routes = [
  { path: "/#", component: Registration },
  { path: "/#dashboard", component: Dashboard },
  { path: "/#info", component: Info },
  { path: "/#events", component: Events },
  { path: "/#add", component: Application },
  { path: "/#referrals", component: Partners },
  { path: "/#finance", component: Payments },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
