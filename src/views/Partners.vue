<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import WebApp from '@twa-dev/sdk';
    import router from '../router/router';

    interface Referral {
        type: string;
        id: string;
        name: string;
        club: string;
        sum: string;
        tel: string;
        email: string;
        percent: string;
    }

    const referrals = ref<Referral[]>([]);

    const fetchData = async () => {
        try {
            const params = new URLSearchParams();
            params.append("initData", WebApp.initData);

            const response = await fetch('https://sandbox.sportcrm.club/hook/tgminiapp3/referral',
                {
                    method: "POST",
                    body: params,
                });

            const data = await response.json();
            console.log("Data received:", data);

            if (data.rows) {
                referrals.value = data.rows;
                console.log("Referrals updated:", referrals.value);
            } else {
                console.error("Data does not contain 'rows' property");
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    onMounted(() => {
        WebApp.BackButton.show();
        WebApp.BackButton.onClick(() => { router.back() });

        WebApp.MainButton.text = 'Создать заявку';
        WebApp.MainButton.color = '#68B77E';
        WebApp.MainButton.show();
        WebApp.MainButton.onClick(() => {
            router.push('add');
        });

        fetchData();
    });
</script>

<template>
    <h2>Все пользователи</h2>
    <div class="partners">
        <div class="partner" v-for="item in referrals" :key="item.id">
            <div class="partner-info">
                <p><span>{{ item.club }}</span></p>
                <p><span>{{ item.name }}</span></p>
                <p><span>{{ item.tel }} / {{ item.email }}</span></p>
            </div>
            <p><span>{{ item.sum }}</span></p>
            <p><span>% {{ item.percent }}</span></p>
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

    .partners {
        min-width: 320px;
        border: 2px solid #68B77E;
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        text-align: start;
    }

    .partner {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
    }
</style>
