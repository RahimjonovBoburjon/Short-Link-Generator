import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/ShortenLink.vue";
import RedirectPage from "../components/RedirectPage.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/:shortId", component: RedirectPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;