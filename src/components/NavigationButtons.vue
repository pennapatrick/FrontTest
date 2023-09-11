<template>
    <div>
        <button @click="navigateTo('/')">Home</button>
        <button @click="navigateTo('/about')">About</button>
        <button @click="navigateTo('/contact')">Contact</button>
        <button @click="navigateTo('/payment')">Payment</button>
        <button @click="navigateTo('/company')">Company</button>

        <!-- Conteúdo da página atual será renderizado aqui -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
    },
};
</script>
