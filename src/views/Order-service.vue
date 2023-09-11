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
        <h1 class="form-title">Ordem de Serviço</h1>
        <form class="custom-form" @submit.prevent="submitForm">
            <div class="columns is-desktop">
                <label class="form-label" for="opening">Abertura:</label>
                <input class="form-input" type="text" id="opening" v-model="form.opening" />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="closure">Fechamento:</label>
                <input class="form-input" type="text" id="closure" v-model="form.closure" />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="date">Data:</label>
                <input class="form-input" type="date" id="date" v-model="form.date" required />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="opening_time">Hora de Abertura:</label>
                <input class="form-input" type="text" id="opening_time" v-model="form.opening_time"
                    placeholder="Hora preenchida automaticamente" />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="closure_time">Hora de Encerramento:</label>
                <input class="form-input" type="time" id="closure_time" v-model="form.closure_time" />
            </div>
            <div class="columns is-desktop">
                <label class="form-label" for="status">Status:</label>
                <input class="form-input" type="text" id="status" v-model="form.status" />
            </div>
            <div class="columns is-desktop" v-for="(base64String, index) in form.base64_strings" :key="index">
                <label class="form-label" for="base64_strings">Imagem {{ index + 1 }}:</label>
                <input class="form-input" type="file" id="base64_strings" @change="handleFileUpload(index)" />
                <button @click="removeFileUpload(index)">Remover</button>
                <img :src="'data:image/png;base64,' + base64String" v-if="base64String" />
            </div>
            <button @click.prevent="addFileUpload()">Adicionar</button>
            <button class="submit-button" type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            form: {
                pk: "ORDER#SERVICE#1",
                sk: "COMPANY#1",
                opening: "",
                closure: "",
                date: "",
                opening_time: "",
                closure_time: "",
                status: "",
                base64_strings: [""],
            },
        };
    },
    methods: {
        async submitForm() {
            // Atualiza o valor do campo opening_time antes de enviar a requisição
            this.form.opening_time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            try {
                const response = await axios.post(
                    "https://pkvz4tmssl.execute-api.us-east-1.amazonaws.com/dev",
                    this.form,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const data = response.data;
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        },
        handleFileUpload(index, e) {
            const file = e.target.files[0];
            if (file) {
                this.createBase64File(file, index);
            }
        },
        createBase64File(fileObject, index) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64String = e.target.result.substring(e.target.result.indexOf(",") + 1,
                    e.target.result.length);
                this.form.base64_strings[index] = base64String;
            };

            reader.readAsDataURL(fileObject);
        },
        addFileUpload() {
            this.form.base64_strings.push("");
        },
        removeFileUpload(index) {
            this.form.base64_strings.splice(index, 1);
        },
    },
};
</script>


<style>
/* Estilizando o container da página */
.page-container {
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
