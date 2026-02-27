<template>
    <div>
<button @click="addCart()" :class="product.name">Add To Cart</button>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(["add-to-cart"])

const cartStore = useCartStore();

function addCart() {
    emit("add-to-cart", props.product)
    cartStore.addToCart(props.product)
    console.log(cartStore.cart)
}
</script>

<style scoped>

</style>