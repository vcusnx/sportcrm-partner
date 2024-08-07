<script setup lang="ts">
    import WebApp from '@twa-dev/sdk';
    import { onMounted, ref } from 'vue';
    import router from '../router/router';

    const name = ref('');
    const email = ref('');
    const tel = ref('');
    const club = ref('');
    const info = ref('');

    const submitForm = async () => {
        try {
            const formData = new URLSearchParams();
            formData.append('name', name.value);
            formData.append('email', email.value);
            formData.append('tel', tel.value);
            formData.append('club', club.value);
            formData.append('info', info.value);
            formData.append('initData', WebApp.initData);

            const response = await fetch('https://sandbox.sportcrm.club/hook/tgminiapp3/add', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.partner !== 0) {
                WebApp.showPopup({
                    title: 'Успешно',
                    message: 'Ваша заявка отправлена'
                })

                router.push('/dashboard');
            }

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

        WebApp.onEvent('mainButtonClicked', submitForm);
    });
</script>

<template>
    <h2>Новая заявка</h2>
    <div class="registrationForm" @submit.prevent="submitForm">
        <form method="post">
            <input type="text" placeholder="Название клуба *" v-model="name" required>
            <input type="text" placeholder="Ф.И.О. Руководителя *" v-model="email" required>
            <input type="number" placeholder="Номер телефона *" v-model="tel" required>
            <input type="email" placeholder="Email" v-model="name">
            <input type="text" placeholder="Информация о клубе" v-model="name">
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
    }
</style>