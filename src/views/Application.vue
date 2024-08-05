<script setup lang="ts">

</script>

<template>
    <h2>Новая заявка</h2>
    <div class="registrationForm">
        <form method="post">
            <input type="text" placeholder="Название клуба *" required>
            <input type="text" placeholder="Ф.И.О. Руководителя *" required>
            <input type="number" placeholder="Номер телефона *" required>
            <input type="email" placeholder="Email">
            <input type="text" placeholder="Информация о клубе">
        </form>
    </div>
</template>

<style scoped>
    h2 {
        margin-top: 0;
        text-align: start;
    }

    form {
        display: grid;
        row-gap: 16px;
    }

    .registrationForm {
        margin-top: 3em;
    }


    input {
        min-width: 320px;
        background-color: transparent;
        border: 1px solid #2E9CCA;
        border-radius: 8px;
        padding: 8px;
        font-size: large;
    }
</style>