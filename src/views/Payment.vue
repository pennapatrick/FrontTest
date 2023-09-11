<template>
  <div class="page-container">
        <Header />
  </div>
  <div class="form-container">
    <h1 class="form-title">Emissão de boleto</h1>
    <form class="custom-form" @submit.prevent="submitForm">
      <div class="columns is-desktop">
        <label class="form-label" for="cpf_cnpj">CPF do pagador: *</label>
        <input class="form-input" type="text" id="cpf_cnpj" v-model="form.cpf_cnpj" required />
      </div>
      <div class="columns is-desktop">
        <label class="form-label" for="value">Valor do boleto: *</label>
        <input class="form-input" type="number" id="value" v-model="form.value" required />
      </div>
      <div class="columns is-desktop">
        <label class="form-label" for="due_date">Data de vencimento: *</label>
        <input class="form-input" type="date" id="due_date" v-model="form.due_date" required />
      </div>
      <button class="submit-button" type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      form: {
        cpf_cnpj: "",
        value: "",
        due_date: "",
      },
      customers: [],
    };
  },
}

</script>

<style>
.page-container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

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

  .profile-icon {
    font-size: 24px;
  }

  .form-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .form-title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  .columns {
    margin-bottom: 10px;
  }

  .form-label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
  }

  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

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

  .error-message {
    color: #f00;
    font-size: 14px;
  }
</style>
