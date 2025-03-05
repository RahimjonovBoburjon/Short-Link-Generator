import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Redirect from './components/Redirect.vue';

const routes = [
    { path: '/', component: App },
    { path: '/:shortId', component: Redirect },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;