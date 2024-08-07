<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import WebApp from '@twa-dev/sdk';
    import router from '../router/router';

    interface Payment {
        type: string;
        id: number;
        name: string;
        sum: number;
        datetime: string;
    }

    const serverResponse = ref<Payment[]>([]);

    const fetchData = async () => {
        try {
            const params = new URLSearchParams();
            params.append("initData", WebApp.initData);

            const response = await fetch('https://sandbox.sportcrm.club/hook/tgminiapp3/finance', {
                method: "POST",
                body: params,
            });
            const data = await response.json();
            serverResponse.value = data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    onMounted(() => {
        WebApp.BackButton.show();
        WebApp.BackButton.onClick(() => { router.back() });

        WebApp.MainButton.text = 'Вывести';
        WebApp.MainButton.color = '#68B77E';
        WebApp.MainButton.show();
        WebApp.MainButton.onClick(() => {
            WebApp.showPopup({
                title: 'Успешно',
                message: 'Ваши средства скоро будут выведены'
            });
        });

        fetchData();
    });
</script>

<template>
    <h2>История платежей</h2>
    <div class="payments">
        <div class="payment" v-for="item in serverResponse" :key="item.id">
            <div class="datetime">
                <p>Дата: <span>{{ new Date(item.datetime).toLocaleDateString() }}</span></p>
                <p>Время: <span>{{ new Date(item.datetime).toLocaleTimeString() }}</span></p>
            </div>
            <p>Сумма: <span>{{ item.sum }}</span></p>
            <p>Тип: <span>{{ item.type }}</span></p>
            <p>Имя: <span>{{ item.name }}</span></p>
        </div>
    </div>
</template>

<style scoped>
    h2 {
        margin: 0;
        text-align: start;
        margin-bottom: 2em;
    }

    span {
        font-weight: 700;
    }

    .payment {
        min-width: 320px;
        border: 2px solid #68B77E;
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        text-align: start;

        .datetime {
            display: flex;
            justify-content: space-between;
        }
    }
</style>