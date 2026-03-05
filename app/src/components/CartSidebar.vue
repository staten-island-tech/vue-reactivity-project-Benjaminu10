<template>
  <div>
    <div :class="['fixed top-0 right-0 h-full z-50 bg-slate-800 ring-l-2 ring-slate-700 shadow-xl transition-all duration-300', open ? 'w-80' : 'w-16']">
      
      <button @click="open = !open" class="absolute top-5 left-3 bg-slate-800 p-2 rounded-xl ring-2 ring-slate-600 shadow-lg hover:bg-slate-700 transition">
        <img src="/cart.png" alt="Shopping Cart" class="size-7 object-contain" />
      </button>

      <div v-if="open" class="mt-20 px-4">
        <div v-for="item in cartStore.cart" :key="item.name" class="text-white text-sm py-1">
          {{ item.quantity }}x {{ item.name }} -
          ${{ item.price }}x{{ item.quantity }} =
          ${{ (item.price * item.quantity).toFixed(2) }}
        </div>

        <div class="border-t border-slate-600 mt-4 pt-3 text-white font-bold">
          Total: ${{ cartStore.cartTotal.toFixed(2) }}
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const open = ref(false)
</script>

<style scoped>

</style>