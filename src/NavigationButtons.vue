<template>
    <div>
        <button @click="navigateTo('/')">Home</button>
        <button @click="navigateTo('/about')">About</button>
        <button @click="navigateTo('/contact')">Contact</button>
        <button @click="navigateTo('/payment')">Payment</button>

        <!-- Conteúdo da página atual será renderizado aqui -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            // Use o método $router.push() para navegar para a rota desejada
            this.$router.push(route);
        },
    },
};
</script>
