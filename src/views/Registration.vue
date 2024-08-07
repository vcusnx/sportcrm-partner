<script setup lang="ts">
    import WebApp from '@twa-dev/sdk';
    import { onMounted, ref } from 'vue';
    import { usePartnerStore } from '../stores/partner';
    import { fetchPartnerData } from '../utils/api';
    import router from '../router/router';

    const partnerStore = usePartnerStore();

    onMounted(async () => {
        try {
            const data = await fetchPartnerData();
            partnerStore.setPartnerData(data);

            console.log(JSON.stringify(data));

            if (partnerStore.partner !== 0) {
                router.push('/dashboard');
            }
        } catch (error) {
            console.error("Error fetching partner data:", error);
        }
    });

    const name = ref('')
    const email = ref('');
    const tel = ref('');
    const club = ref('');

    const submitForm = async () => {
        try {
            const formData = new URLSearchParams();
            formData.append('name', name.value);
            formData.append('email', email.value);
            formData.append('tel', tel.value);
            formData.append('club', club.value);
            formData.append('initData', WebApp.initData);

            const response = await fetch('https://sandbox.sportcrm.club/hook/tgminiapp3/register', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.partner !== 0) {
                router.push('/dashboard');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    onMounted(() => {
        WebApp.MainButton.text = 'Зарегистрироваться';
        WebApp.MainButton.color = '#68B77E';
        WebApp.MainButton.show();

        WebApp.onEvent('mainButtonClicked', submitForm);
    });

</script>

<template>
    <h2>Регистрация в реферальной программе</h2>
    <div class="registrationForm">
        <form @submit.prevent="submitForm">
            <input type="text" placeholder="Ф.И.О. *" v-model="name" required>
            <input type="email" placeholder="Email *" v-model="email" required>
            <input type="tel" placeholder="Номер телефона *" v-model="tel" required>
            <input type="text" placeholder="Название клуба" v-model="club">
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