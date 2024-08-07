<script setup lang="ts">
    import { usePartnerStore } from '../stores/partner';
    import { fetchPartnerData } from '../utils/api';
    import { onMounted } from 'vue';

    const partnerStore = usePartnerStore();

    onMounted(async () => {
        try {
            const data = await fetchPartnerData();
            partnerStore.setPartnerData(data);
        } catch (error) {
            console.error("Error fetching partner data:", error);
        }
    });
</script>

<template>
    <div class="actions">
        <RouterLink to="/referrals">
            <div class="withdraw">
                <p class="title">К выводу: <span>{{ partnerStore.saldo }}</span></p>
                <div class="goto">
                    <p>{{ partnerStore.cnt }}</p>
                    <img src="../assets/arrow_blue.svg" alt="Перейти к выводу" width="32px">
                </div>
            </div>
        </RouterLink>
        <RouterLink to="/referrals">
            <div class="debtors">
                <p class="title">Должники: <span>{{ partnerStore.debt }}</span></p>
                <div class="goto">
                    <p>{{ partnerStore.cnt }}</p>
                    <img src="../assets/arrow_red.svg" alt="Перейти к выводу" width="32px">
                </div>
            </div>
        </RouterLink>
        <RouterLink to="/referrals">
            <div class="pending">
                <p class="title">Ожидание: <span>{{ partnerStore.wait }}</span></p>
                <div class="goto">
                    <p>{{ partnerStore.waitcnt }}</p>
                    <img src="../assets/arrow_gray.svg" alt="Перейти к выводу" width="32px">
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>

    a {
        color: white;
    }

    .title {
        font-weight: 300;

        span {
            font-weight: 600;
        }
    }

    .goto {
        p {
            font-weight: 600;
        }
    }


    .actions {
        display: grid;
        row-gap: 16px;
        margin-bottom: 32px;

    }

    .withdraw,
    .debtors,
    .pending {
        justify-content: space-between;
        align-items: center;
        display: flex;
        border-radius: 8px;

        .title {
            margin-left: 8px;
        }

        .goto {
            display: flex;
            align-items: center;
            text-align: end;
        }

        p {
            font-size: large;
        }

        img {
            margin: 0;
        }
    }

    .withdraw {
        border: 1px solid #0070f0;
    }

    .debtors {
        border: 1px solid #ed5959;
    }

    .pending {
        border: 1px solid #c6c6c6;
    }
</style>