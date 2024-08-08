<script setup lang="ts">
    import WebApp from '@twa-dev/sdk';
    import { onMounted, ref } from 'vue';
    import router from '../router/router';

    const formData = ref({
        name: '',
        email: '',
        tel: '',
        club: '',
        info: ''
    });

    const reg = async () => {
        try {
            const form = new URLSearchParams();
            form.append('name', formData.value.name);
            form.append('email', formData.value.email);
            form.append('tel', formData.value.tel);
            form.append('club', formData.value.club);
            form.append('info', formData.value.info);
            form.append('initData', WebApp.initData);

            const response = await fetch('https://sandbox.sportcrm.club/hook/tgminiapp3/add', {
                method: 'POST',
                body: form,
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    onMounted(() => {
        WebApp.BackButton.show();
        WebApp.BackButton.onClick(() => { router.back() });

        WebApp.MainButton.text = 'Добавить';
        WebApp.MainButton.color = '#68B77E';
        WebApp.MainButton.show();

        WebApp.onEvent('mainButtonClicked', reg);
    });
</script>

<template>
    <h2>Новая заявка</h2>
    <div class="registratePartner">
        <form @submit.prevent="reg">
            <input type="text" placeholder="Название клуба *" v-model="formData.club" required>
            <input type="text" placeholder="Ф.И.О. Руководителя *" v-model="formData.name" required>
            <input type="number" placeholder="Номер телефона *" v-model="formData.tel" required>
            <input type="email" placeholder="Email" v-model="formData.email">
            <input type="text" placeholder="Информация о клубе" v-model="formData.info">
        </form>
    </div>
</template>

<style scoped>
    h2 {
        margin-top: 0;
        text-align: start;
    }

    form {
        display: grid;
        row-gap: 16px;
    }

    .registrationForm {
        margin-top: 3em;
    }


    input {
        min-width: 320px;
        background-color: transparent;
        border: 1px solid #2E9CCA;
        border-radius: 8px;
        padding: 8px;
        font-size: large;
        color: #f2f2f2;
    }
</style>