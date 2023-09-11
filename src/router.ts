import { createRouter, createWebHistory } from 'vue-router';
import Payment from './views/Payment.vue';
import Company from './views/Company.vue';
import Order from './views/Order-service.vue';
import Home from './views/Home.vue';

const routes = [
    { path: '/payment', component: Payment },
    { path: '/company', component: Company },
    { path: '/order-service', component: Order },
    { path: '/home', component: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
