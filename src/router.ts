import { createRouter, createWebHistory } from 'vue-router';
import Payment from './views/Payment.vue';
import Company from './views/Company.vue';

const routes = [
    { path: '/payment', component: Payment },
    { path: '/company', component: Company },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
