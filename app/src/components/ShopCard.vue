<template>
    <div class="bg-slate-700 w-96 shadow-xl rounded-lg border-2 border-black">

<h2>{{ product.name }}</h2>
<img class="cardImg" :src="product.img" :alt="product.alt">
<h3>{{ product.description }}</h3>
<h3>{{ product.price }}</h3>
<AddToCartButton :product="product" @add-to-cart="handleAddToCart" />
    </div>
</template>

<script setup>

import AddToCartButton from './AddToCartButton.vue';

defineProps({
    product: {
        type: Object,
        required: true
    }
})

function handleAddToCart(product) {
    console.log(product, "added to cart")
}
</script>

<style scoped>
.cardImg{
    width: 130px;
    height:auto;
}
</style>