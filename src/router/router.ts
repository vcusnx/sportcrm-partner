import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Info from "../views/Info.vue";
import Application from "../views/Application.vue";
import Partners from "../views/Partners.vue";
import Registration from "../views/Registration.vue";
import Payments from "../views/Payments.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/info", component: Info },
  { path: "/add", component: Application },
  { path: "/referral", component: Partners },
  { path: "/regstration", component: Registration },
  { path: "/finance", component: Payments },
  { path: "/events", component: Payments },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
