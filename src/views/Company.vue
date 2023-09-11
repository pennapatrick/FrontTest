<template>
    <div class="page-container">
        <Header />
    </div>
    <div class="form-container">
        <h1 class="form-title">Cadastro de Empresas</h1>
        <form class="custom-form" @submit.prevent="submitForm">
            <div class="columns is-desktop">
                <label class="form-label" for="name">Nome da Empresa: *</label>
                <input class="form-input" type="text" id="name" v-model="form.name" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="email">Email: *</label>
                <input class="form-input" type="email" id="email" v-model="form.email" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="cpf_cnpj">CPF/CNPJ: *</label>
                <input class="form-input" type="text" id="cpf_cnpj" v-model="form.cpf_cnpj" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="birth_date">Data de Fundação:</label>
                <input class="form-input" type="date" id="birth_date" placeholder="aaaa-mm-dd" v-model="form.birth_date" />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="phone">Telefone: *</label>
                <input class="form-input" type="tel" id="phone" v-model="form.phone" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="mobile_phone">Celular:</label>
                <input class="form-input" type="tel" id="mobile_phone" v-model="form.mobile_phone" />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="address">Endereço: *</label>
                <input class="form-input" type="text" id="address" v-model="form.address" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="address_number">Número: *</label>
                <input class="form-input" type="text" id="address_number" v-model="form.address_number" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="complement">Complemento: *</label>
                <input class="form-input" type="text" id="complement" v-model="form.complement" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="postal_code">CEP: *</label>
                <input class="form-input" type="text" id="postal_code" v-model="form.postal_code" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="city">Cidade: *</label>
                <input class="form-input" type="text" id="city" v-model="form.city" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="province">Bairro: *</label>
                <input class="form-input" type="text" id="province" v-model="form.province" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="state">Estado: *</label>
                <input class="form-input" type="text" id="state" v-model="form.state" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="country">País: *</label>
                <input class="form-input" type="text" id="country" v-model="form.country" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="site">Site:</label>
                <input class="form-input" type="text" id="site" v-model="form.site" />
            </div>
            <button class="submit-button" type="submit">Enviar</button>
        </form>
        <NavigationButtons />
    </div>
</template>
  
<script>
import {api} from "../services"
import Header from '../components/Header.vue';

export default {
    components: {
        Header,
    },
    data() {
        return {
            form: {
                pk: "COMPANY#",
                sk: "COMPANY",
                name: "",
                email: "",
                cpf_cnpj: "",
                birth_date: "",
                phone: "",
                mobile_phone: "",
                address: "",
                address_number: "",
                complement: "",
                postal_code: "",
                city: "",
                province: "",
                state: "",
                country: "",
                site: "",
            },
        };
    },
    methods: {
        submitForm() {
            api.post("", this.form).then((response) => {
                if (response && response.status == 201){

                } else {
                    console.error(error);        
                }
            });
        },
    },
    watch: {
        "form.cpf_cnpj": function (newCnpj) {
            const numericCnpj = newCnpj.replace(/\D/g, "");
            this.form.pk = `COMPANY#${numericCnpj}`;
        },
    },
};
</script>
  
<style>
.page-container {
    font-family: Arial, Helvetica, sans-serif;
    max-width: 4000px;
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
    font-family: Arial, Helvetica, sans-serif;
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