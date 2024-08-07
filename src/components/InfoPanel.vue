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
    <div class="info-panel">
        <RouterLink to="/events" class="applications">
            <p>Всего заявок</p>
            <p class="val">{{ partnerStore.rows.length }}</p>
        </RouterLink>
        <RouterLink to="/finance" class="funds">
            <p>За всё время</p>
            <p class="val">{{ partnerStore.sum }}</p>
        </RouterLink>
    </div>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: #f2f2f2;
    }

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