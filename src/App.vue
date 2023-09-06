<template>
  <div class="page-container">
    <div class="header">
      <div class="header-left">
        <div class="logo">
          <span>CAMPOS DEVELOPERS</span>
        </div>
      </div>
      <div class="header-right">
        <button class="header-button">Botão 1</button>
        <button class="header-button">Botão 2</button>
        <button class="header-button">Botão 3</button>
        <div class="profile-icon">
          <i class="fas fa-user-circle"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="form-container">
    <h1 class="form-title">Home</h1>
    <NavigationButtons />
  </div>
</template>

<script>
import axios from "axios";
import NavigationButtons from './components/NavigationButtons.vue';

export default {
  components: {
    NavigationButtons,
  },
};
</script>

<style>
/* Estilizando o container da página */
.page-container {
    font-family: Arial, Helvetica, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  /* Estilizando o cabeçalho */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #19a867;
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .header-left {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
  }

  /* Estilizando os botões do cabeçalho */
  .header-button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 14px;
    margin-right: 10px;
    cursor: pointer;
  }

  .header-button:last-child {
    margin-right: 0;
  }

  /* Estilizando o ícone de perfil */
  .profile-icon {
    font-size: 24px;
  }
  /* Estilizando o container do formulário */
  .form-container {
    font-family: Arial, Helvetica, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  /* Estilizando o título do formulário */
  .form-title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  /* Estilizando as colunas e rótulos */
  .columns {
    margin-bottom: 10px;
  }

  .form-label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
  }

  /* Estilizando os campos de entrada */
  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  /* Estilizando o botão de envio */
  .submit-button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    width: 100%;
  }

  .submit-button:hover {
    background-color: #0056b3;
  }

  /* Estilizando mensagens de erro */
  .error-message {
    color: #f00;
    font-size: 14px;
  }
</style>
