<template>
  <button
    @click="addCart"
    class="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 active:scale-95 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    Add to cart
  </button>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

function addCart() {
  cartStore.addToCart(props.product)
}
</script>