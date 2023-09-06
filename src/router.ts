import { createRouter, createWebHistory } from 'vue-router';
import Payment from './views/Payment.vue';

const routes = [
    { path: '/payment', component: Payment },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
