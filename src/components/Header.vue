<template>
    <header class="app-header">
        <div class="logo">
            <img src="../assets/logo.png" alt="Logo" />
        </div>
    </header>
</template>
  
<script>
export default {
    name: 'Header',
};
</script>
  
<style scoped>
.app-header {
    background-color: #c4cdc9;
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    width: 1000px;
    /* Ajuste o tamanho da imagem conforme necessário */
    height: 115px;
    margin-right: 5px;
}

.logo span {
    font-size: 18px;
    font-weight: bold;
}
</style>
