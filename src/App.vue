<script setup>
import TheHeader from '@/components/TheHeader.vue';
import ProductCard from '@/components/ProductCard.vue';
import { useProductsStore } from '@/stores/ProductStore';
import { useCartStore } from './stores/CartStore';
const productsStore = useProductsStore();
const cartsStore = useCartStore();
productsStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productsStore.product"
        :key="product.name"
        :product="product"
        @addToCart="cartsStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
