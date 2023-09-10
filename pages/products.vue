<template>
  <PageContainer>
    <Breadcrumb />
    <h1 class="text-3xl mb-6">Products</h1>
    <div v-if="productStore.isLoading">Loading products...</div>
    <div v-else class="flex flex-wrap">
      <ProductItem class="flex-[1_1_50%] max-w-[50%] sm:flex-[1_1_33%] sm:max-w-[33%] md:flex-[1_1_25%] md:max-w-[25%] lg:flex-[1_1_20%] lg:max-w-[20%]"
                   v-if="!productStore.isLoading" :product="product" v-for="product in productStore.products" :key="product.id" />
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import {useProductStore} from "~/stores/product";
const productStore = useProductStore()
</script>

