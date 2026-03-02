<template>
  <div class="min-h-screen bg-slate-900 px-6 py-10">
    <div class="max-w-7xl mx-auto">

      <div class="mb-10 text-center">
        <h1 class="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
          TCG Shop
        </h1>
        <p class="mt-3 text-slate-400 text-lg">
          Anti-Scalper Pokeshop
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ShopCard
          v-for="product in items"
          :key="product.name"
          :product="product"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ShopCard from '@/components/ShopCard.vue';

const items = ref([
  // Scarlet & Violet - Temporal Forces
  {
    name: "Temporal Forces Booster Pack",
    price: 4.49,
    description:
      "A single booster pack containing 10 random Temporal Forces cards.",
    img: "/temporal-forces-booster-pack.png",
    alt: "Temporal Forces booster pack",
    inStock: true,
    category: "Temporal Forces",
  },
  {
    name: "Temporal Forces Booster Bundle",
    price: 26.99,
    description:
      "Includes 6 Temporal Forces booster packs for even more pulls.",
    img: "/temporal-forces-booster-bundle.png",
    alt: "Temporal Forces booster bundle",
    inStock: true,
    category: "Temporal Forces",
  },
  {
    name: "Temporal Forces Elite Trainer Box",
    price: 49.99,
    description: "Includes 9 booster packs, card sleeves, dice, and more.",
    img: "/temporal-forces-etb.png",
    alt: "Temporal Forces Elite Trainer Box",
    inStock: true,
    category: "Temporal Forces",
  },
  {
    name: "Temporal Forces Build & Battle Box",
    price: 24.99,
    description:
      "Pre-release kit with 4 booster packs and a ready-to-play deck.",
    img: "/temporal-forces-build-battle.png",
    alt: "Temporal Forces Build & Battle Box",
    inStock: true,
    category: "Temporal Forces",
  },

  // Scarlet & Violet - Paradox Rift
  {
    name: "Paradox Rift Booster Pack",
    price: 4.49,
    description:
      "A single booster pack featuring futuristic and ancient Pokémon.",
    img: "/paradox-rift-booster-pack.png",
    alt: "Paradox Rift booster pack",
    inStock: true,
    category: "Paradox Rift",
  },
  {
    name: "Paradox Rift Booster Bundle",
    price: 26.99,
    description: "Includes 6 booster packs with both ancient and future forms.",
    img: "/paradox-rift-booster-bundle.png",
    alt: "Paradox Rift booster bundle",
    inStock: true,
    category: "Paradox Rift",
  },
  {
    name: "Paradox Rift Elite Trainer Box",
    price: 49.99,
    description:
      "Comes with 9 booster packs, exclusive sleeves, and accessories.",
    img: "/paradox-rift-etb.png",
    alt: "Paradox Rift Elite Trainer Box",
    inStock: true,
    category: "Paradox Rift",
  },
  {
    name: "Paradox Rift Premium Checklane Blister",
    price: 13.99,
    description:
      "Includes 1 booster pack, 3 cards with an evolution line, and a collectible coin.",
    img: "/paradox-rift-blister.png",
    alt: "Paradox Rift checklane blister",
    inStock: true,
    category: "Paradox Rift",
  },

  // Scarlet & Violet - Obsidian Flames
  {
    name: "Obsidian Flames Booster Pack",
    price: 4.49,
    description: "A single pack featuring the mighty Tera Charizard ex.",
    img: "/obsidian-flames-booster-pack.png",
    alt: "Obsidian Flames booster pack",
    inStock: true,
    category: "Obsidian Flames",
  },
  {
    name: "Obsidian Flames Booster Box",
    price: 119.99,
    description:
      "A sealed display containing 36 Obsidian Flames booster packs.",
    img: "/obsidian-flames-booster-box.png",
    alt: "Obsidian Flames booster box",
    inStock: true,
    category: "Obsidian Flames",
  },
  {
    name: "Obsidian Flames Elite Trainer Box",
    price: 49.99,
    description:
      "Comes with 9 booster packs, sleeves, energy cards, and accessories.",
    img: "/obsidian-flames-etb.png",
    alt: "Obsidian Flames Elite Trainer Box",
    inStock: true,
    category: "Obsidian Flames",
  },
  {
    name: "Obsidian Flames Build & Battle Stadium",
    price: 59.99,
    description:
      "Includes two Build & Battle Boxes and 11 total booster packs.",
    img: "/obsidian-flames-battle-stadium.png",
    alt: "Obsidian Flames Build & Battle Stadium",
    inStock: true,
    category: "Obsidian Flames",
  },

  // Scarlet & Violet - Paldea Evolved
  {
    name: "Paldea Evolved Booster Pack",
    price: 4.49,
    description:
      "A single pack featuring Meowscarada, Skeledirge, and Quaquaval.",
    img: "/paldea-evolved-booster-pack.png",
    alt: "Paldea Evolved booster pack",
    inStock: true,
    category: "Paldea Evolved",
  },
  {
    name: "Paldea Evolved Booster Bundle",
    price: 26.99,
    description: "Includes 6 booster packs from the Paldea Evolved set.",
    img: "/paldea-evolved-booster-bundle.png",
    alt: "Paldea Evolved booster bundle",
    inStock: true,
    category: "Paldea Evolved",
  },
  {
    name: "Paldea Evolved Elite Trainer Box",
    price: 49.99,
    description: "Includes 9 booster packs, sleeves, dice, and a storage box.",
    img: "/paldea-evolved-etb.png",
    alt: "Paldea Evolved Elite Trainer Box",
    inStock: true,
    category: "Paldea Evolved",
  },
  {
    name: "Paldea Evolved 3-Pack Blister",
    price: 13.99,
    description: "A blister pack with 3 boosters and a holographic promo card.",
    img: "/paldea-evolved-blister.png",
    alt: "Paldea Evolved 3-pack blister",
    inStock: true,
    category: "Paldea Evolved",
  },

  // Scarlet & Violet - 151
  {
    name: "Pokémon 151 Booster Pack",
    price: 4.99,
    description: "A single booster pack featuring the original Kanto Pokémon.",
    img: "/151-booster-pack.png",
    alt: "Pokémon 151 booster pack",
    inStock: true,
    category: "151",
  },
  {
    name: "Pokémon 151 Booster Bundle",
    price: 29.99,
    description: "Includes 6 booster packs full of nostalgic Kanto favorites.",
    img: "/151-booster-bundle.png",
    alt: "Pokémon 151 booster bundle",
    inStock: true,
    category: "151",
  },
  {
    name: "Pokémon 151 Elite Trainer Box",
    price: 54.99,
    description:
      "Includes 9 booster packs, sleeves, dice, and an illustrated guidebook.",
    img: "/151-etb.png",
    alt: "Pokémon 151 Elite Trainer Box",
    inStock: true,
    category: "151",
  },
  {
    name: "Pokémon 151 Binder Collection",
    price: 24.99,
    description: "Includes 4 booster packs and a mini collector’s binder.",
    img: "/151-binder-collection.png",
    alt: "Pokémon 151 Binder Collection",
    inStock: true,
    category: "151",
  },

])

</script>

<style scoped>
div {
  padding: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;

}
.container {
  display: flex;
  width: 80vw;
  margin: 20px auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  border: 1px solid #000000;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}


</style>