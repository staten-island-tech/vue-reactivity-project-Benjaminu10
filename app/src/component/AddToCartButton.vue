<template>
    <div>
<button @click="addCart()" :class="product.name">Add To Cart</button>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(["add-to-cart"])


function addCart() {
    emit("add-to-cart", props.product)
}
</script>

<style scoped>

</style>