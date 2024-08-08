<script lang="ts">
    import { ref, watch } from 'vue';
    import { Doughnut } from 'vue-chartjs';
    import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
    import { usePartnerStore } from '../stores/partner';

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    export default {
        name: "Средства",
        components: { Doughnut },
        setup() {
            const partnerStore = usePartnerStore();

            const chartData = ref({
                labels: ["К выводу", "Должники", "Ожидание"],
                datasets: [{
                    backgroundColor: ["#0070F0", "#ED5959", "#C6C6C6"],
                    data: [partnerStore.sum, partnerStore.debt, partnerStore.wait],
                    borderWidth: 0
                }]
            });

            const chartOptions = ref({
                responsive: true,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: false
                    }
                }
            });

            // Обновление данных диаграммы при изменении данных в partnerStore
            watch([partnerStore.sum, partnerStore.debt, partnerStore.wait], ([newSum, newDebt, newWait]) => {
                chartData.value.datasets[0].data = [newSum, newDebt, newWait];
            });

            return {
                chartData,
                chartOptions
            };
        }
    }
</script>

<template>
    <div class="chart">
        <Doughnut :options="chartOptions" :data="chartData" />
    </div>
</template>

<style scoped>
    .chart {
        margin-top: 2em;
        margin-bottom: 8px;
        display: flex;
        justify-content: center;
        max-height: 300px;
        align-items: center;
    }
</style>