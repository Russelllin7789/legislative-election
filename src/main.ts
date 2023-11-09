import { createApp } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Service from "@/Pages/Service.vue";
import Advocate from "@/Pages/Advocate.vue";
import Activity from "@/Pages/Activity.vue";
import Issue from "@/Pages/Issue.vue";
import Donation from "@/Pages/Donation.vue";
import Home from "@/Pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/advocate",
    name: "Advocate",
    component: Advocate,
  },
  {
    path: "/activity",
    name: "Activity",
    component: Activity,
  },
  {
    path: "/issue",
    name: "Issue",
    component: Issue,
  },
  {
    path: "/donation",
    name: "Donation",
    component: Donation,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
