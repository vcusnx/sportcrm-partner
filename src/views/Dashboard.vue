<script setup lang="ts">
    import { onMounted } from 'vue';
    import WebApp from '@twa-dev/sdk';
    import Header from '../components/Header.vue';
    import Chart from '../components/Chart.vue';
    import InfoPanel from '../components/InfoPanel.vue';
    import Actions from '../components/Actions.vue';
    import router from '../router/router';

    onMounted(() => {
        WebApp.BackButton.hide();

        WebApp.MainButton.text = 'Создать заявку';
        WebApp.MainButton.color = '#68B77E';
        WebApp.MainButton.show();
        WebApp.MainButton.onClick(() => {
            router.push('/add');
        });
    });
</script>

<template>
    <Header />
    <Chart />
    <InfoPanel />
    <Actions />
</template>

<style scoped></style>
