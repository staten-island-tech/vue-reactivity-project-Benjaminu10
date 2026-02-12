<template>
    <div class="card">

<h2>{{ product.name }}</h2>
<img class="cardImg" :src="product.img" alt="test">
<h3>{{ product.description }}</h3>
<h3>{{ product.price }}</h3>

    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.cardImg{
    width: 130px;
    height:auto;
}
</style>