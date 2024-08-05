<script setup lang="ts">

</script>

<template>
    <h2>Недавние события</h2>

    <div class="events">
        <div class="event">
            <div class="event-info">
                <p><span>{{ 'Тип заявки' }}</span></p>
                <p><span>№ {{ 'Заявки' }}</span></p>
            </div>
            <div class="datetime">
                <p><span>{{ 'Дата' }}</span></p>
                <p><span>{{ 'Время' }}</span></p>
            </div>
        </div>
    </div>

</template>

<style scoped>
    h2 {
        text-align: start;
    }

    span {
        font-weight: 700;
    }

    .events {
        min-width: 320px;
        border: 2px solid #68B77E;
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        text-align: start;

        .event {
            display: flex;
            justify-content: space-between;
        }
    }
</style>