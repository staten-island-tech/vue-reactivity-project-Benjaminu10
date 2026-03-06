<template>
  <div
    class="group rounded-xl bg-slate-700 shadow-sm ring-1 ring-slate-200
           hover:shadow-lg transition overflow-hidden flex flex-col"
  >
    <div class="aspect-square overflow-visible bg-slate-700">
      <img
        :src="product.img"
        :alt="product.alt"
        class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 text-slate-200"
      />
    </div>

    <div class="flex flex-col gap-2 p-4 flex-1">
      <h2 class="font-semibold text-slate-100">
        {{ product.name }}
      </h2>

      <p class="text-sm text-slate-400 line-clamp-2">
        {{ product.description }}
      </p>

      <div class="mt-auto flex items-center justify-between">
        <span class="text-lg font-bold text-slate-200">
          ${{ product.price }}
        </span>

        <AddToCartButton
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </div>
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