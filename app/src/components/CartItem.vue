<template>
    <div class="flex justify-between items-center text-white text-sm py-2">
        <div>
            {{ item.name }}
            <h1>${{ (item.price * item.quantity).toFixed(2) }}</h1>
        </div>
        

        <div class ="flex items-center gap-2">
            <button @click="decrease" class="px-2 bg-slate-700 rounded hover:bg-slate-600">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increase" class="px-2 bg-slate-700 rounded hover:bg-slate-600">+</button>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

const cartStore = useCartStore()

function increase() {
    cartStore.increaseQuantity(props.item.name)
}

function decrease() {
    cartStore.decreaseQuantity(props.item.name)
}

</script>

<style scoped>

</style>