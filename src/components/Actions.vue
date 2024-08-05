<script setup lang="ts">

</script>

<template>
    <div class="actions">
        <div class="withdraw">
            <p class="title">К выводу: <span>{{ 11000 }}</span></p>
            <div class="goto">
                <p>{{ 9 }}</p>
                <img src="../assets/arrow_blue.svg" alt="Перейти к выводу" width="32px">
            </div>
        </div>
        <div class="debtors">
            <p class="title">Должники: <span>{{ 7000 }}</span></p>
            <div class="goto">
                <p>{{ 5 }}</p>
                <img src="../assets/arrow_red.svg" alt="Перейти к выводу" width="32px">
            </div>
        </div>
        <div class="pending">
            <p class="title">Ожидание: <span>{{ 5000 }}</span></p>
            <div class="goto">
                <p>{{ 2 }}</p>
                <img src="../assets/arrow_gray.svg" alt="Перейти к выводу" width="32px">
            </div>
        </div>
    </div>
</template>

<style scoped>

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