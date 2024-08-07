<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    onMounted(() => {
        if (!router.currentRoute.value.matched.length) {
            router.push('/#');
        }
    });
</script>

<template>
    <router-view />
</template>

<style scoped></style>
