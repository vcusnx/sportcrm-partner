<script lang="ts">
    import { Doughnut } from 'vue-chartjs';
    import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
    import { usePartnerStore } from '../stores/partner';

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    const partnerStore = usePartnerStore();

    const withdraw = partnerStore.sum;
    const debt = partnerStore.debt;
    const wait = partnerStore.wait;

    export default {
        name: "Средства",
        components: { Doughnut },
        data() {
            return {
                chartData: {
                    labels: ["К выводу", "Должники", "Ожидание"],
                    datasets: [{
                        backgroundColor: ["#0070F0", "#ED5959", "#C6C6C6"],
                        data: [withdraw, debt, wait],
                        borderWidth: 0
                    }]
                },
                chartOptions: {
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
                }
            }
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