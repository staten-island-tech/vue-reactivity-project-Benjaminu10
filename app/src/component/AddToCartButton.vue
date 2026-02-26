<template>
    <div>
<button @click="addCart()" :class="product.name">Add To Cart</button>
    </div>
</template>

<script setup>
import { importCart } from '@/views/MainView.vue'

const cart = importCart();

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(["add-to-cart"])


function addCart() {
    emit("add-to-cart", props.product)
    cart.push(props.product)
    console.log(cart)
}
</script>

<style scoped>

</style>