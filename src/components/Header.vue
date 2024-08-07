<script setup lang="ts">
</script>

<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/logo.svg" alt="Логотип" width="128px">
        </div>
        <div class="info">
            <RouterLink to="/info">
                <img src="../assets/info.svg" alt="Информация" width="32px">
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .header {
        min-width: 360px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>