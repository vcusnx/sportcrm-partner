<script setup lang="ts">

</script>

<template>
    <h2>Регистрация в реферальной программе</h2>
    <div class="registrationForm">
        <form method="post">
            <input type="text" placeholder="Ф.И.О. *" required>
            <input type="email" placeholder="Email *" required>
            <input type="number" placeholder="Номер телефона *" required>
            <input type="text" placeholder="Название клуба">
            <div class="agreements">
                <div class="tou">
                    <input type="checkbox" name="tou-agreement" id="tou-agreement">
                    <label for="tou-agreement">Ознакомлен и согласен с <a href="#">Правилами использования партнерской
                            программы</a></label>
                </div>
                <div class="offer">
                    <input type="checkbox" name="offer-agreement" id="toe-agreement">
                    <label for="offer-agreement">Ознакомлен и согласен с <a href="#">Офертой для партнерской
                            программы</a></label>
                </div>
            </div>
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

    .agreements {
        margin-top: 1em;
        display: flex;
        flex-direction: column;
    }

    .tou,
    .offer {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .tou input,
    .offer input {
        margin-right: 10px;
    }


    input {
        background-color: transparent;
        border: 1px solid #2E9CCA;
        border-radius: 8px;
        padding: 8px;
        font-size: large;
    }
</style>