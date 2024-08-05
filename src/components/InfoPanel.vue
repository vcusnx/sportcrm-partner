<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { usePartnerStore } from '../stores/partner';
    import { fetchPartnerData } from '../utils/api';

    const partnerStore = usePartnerStore();
    partnerStore.setPartnerData(fetchPartnerData)

    const { rows, sum } = storeToRefs(partnerStore);
</script>

<template>
    <div class="info-panel">
        <router-link to="/#events" class="applications">
            <p>Всего заявок</p>
            <p class="val">{{ rows.length }}</p>
        </router-link>
        <router-link to="/#payments" class="funds">
            <p>За всё время</p>
            <p class="val">{{ sum }}</p>
        </router-link>
    </div>
</template>

<style scoped>
    .info-panel {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;

        .applications {
            text-align: start;

            .val {
                margin-top: 0;
                font-size: larger;
                font-weight: 500;
            }
        }

        .funds {
            text-align: end;

            .val {
                margin-top: 0;
                font-size: larger;
                font-weight: 500;
            }
        }
    }
</style>