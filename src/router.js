import { createRouter, createWebHistory } from 'vue-router';
import Home from './App.vue';
import Redirect from './components/Redirect.vue';

const routes = [
    { path: "/:shortId", component: Redirect },
    { path: "/", component: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;