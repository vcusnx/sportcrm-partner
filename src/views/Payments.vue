<script setup lang="ts">
    import { onMounted } from 'vue';
    import WebApp from '@twa-dev/sdk';
    import router from '../router/router';

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
            })
        });
    });
</script>

<template>
    <h2>История платежей</h2>
    <div class="payments">
        <div class="payment">
            <div class="datetime">
                <p>Дата: <span>{{ '01.01.2024' }}</span></p>
                <p>Время: <span>{{ '12:00' }}</span></p>
            </div>
            <p>Сумма: <span>{{ 5000 }}</span></p>
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