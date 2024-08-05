<script setup lang="ts">
    import WebApp from '@twa-dev/sdk';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const initDataTg = WebApp.initData;

    const formData = ref({
        name: '',
        email: '',
        phone: '',
        club: '',
        initData: initDataTg,
    });

    const router = useRouter();

    const submitForm = async () => {
        try {
            const response = await fetch('https://sandbox.sportcrm.club/hook/tgminiapp2/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify(formData.value),
            });

            const data = await response.json();

            if (data.partner !== 0) {
                router.push('/dashboard');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
</script>

<template>
    <h2>Регистрация в реферальной программе</h2>
    <div class="registrationForm">
        <form @submit.prevent="submitForm">
            <input type="text" placeholder="Ф.И.О. *" v-model="formData.name" required>
            <input type="email" placeholder="Email *" v-model="formData.email" required>
            <input type="number" placeholder="Номер телефона *" v-model="formData.phone" required>
            <input type="text" placeholder="Название клуба" v-model="formData.club">
            <div class="agreements">
                <div class="tou">
                    <input type="checkbox" name="tou-agreement" id="tou-agreement">
                    <label for="tou-agreement">Ознакомлен и согласен с <a href="#">Правилами использования партнерской
                            программы</a></label>
                </div>
                <div class="offer">
                    <input type="checkbox" name="offer-agreement" id="toe-agreement">
                    <label for="offer-agreement">Ознакомлен и согласен с <a href="#">Офертой для партнерской
                            программы</a></label>
                </div>
            </div>
            <button type="submit">Submit</button>
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

    .agreements {
        margin-top: 1em;
        display: flex;
        flex-direction: column;
    }

    .tou,
    .offer {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .tou input,
    .offer input {
        margin-right: 10px;
    }


    input {
        background-color: transparent;
        border: 1px solid #2E9CCA;
        border-radius: 8px;
        padding: 8px;
        font-size: large;
    }
</style>