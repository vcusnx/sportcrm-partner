<script setup lang="ts">

</script>

<template>
    <h2>Партнеры</h2>
    <div class="partners">
        <div class="partner">
            <div class="partner-info">
                <p><span>{{ 'Название' }}</span></p>
                <p><span>{{ 'Имя' }}</span></p>
                <p><span>{{ 'Телефон' }}</span></p>
            </div>
            <p><span>{{ 5000 }}</span></p>
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

        .partner {
            display: flex;
            justify-content: space-between;
        }
    }
</style>