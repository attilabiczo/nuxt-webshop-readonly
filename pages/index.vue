<template>
  <PageContainer>
    <div>
      <h1 class="text-3xl mb-6 text-center sm:text-left">Featured products</h1>
      <ProductListTemplate :is-loading="productStore.isLoading" :has-error="productStore.hasError">
        <div class="flex flex-wrap">
          <ProductItem class="flex-[1_1_50%] max-w-[50%] sm:flex-[1_1_33%] sm:max-w-[33%] md:flex-[1_1_25%] md:max-w-[25%] lg:flex-[1_1_20%] lg:max-w-[20%]"
          v-if="!productStore.isLoading" :product="product" v-for="product in featuredProducts" :key="product.id" />

          <div class="flex-[1_1_50%] max-w-[50%] sm:flex-[1_1_33%] sm:max-w-[33%] md:flex-[1_1_25%] md:max-w-[25%] lg:flex-[1_1_20%] lg:max-w-[20%] flex items-center justify-start p-2 rounded">
            <div class="w-[160px] h-[100px] flex items-center justify-start bg-[#FFFFFF] dark:bg-custom-dark-background">
            <NuxtLink to="/products">
              <button class="rounded-full sm:ml-2 p-3 bg-custom-orange dark:border dark:border-custom-orange dark:bg-custom-dark-background hover:bg-custom-secondary-orange text-[#FFFFFF] dark:text-custom-orange dark:hover:text-custom-secondary-orange text-sm uppercase">
              See more
              </button>
            </NuxtLink>
            </div>
          </div>
        </div>
      </ProductListTemplate>

    </div>
  </PageContainer>
</template>

<script setup lang="ts">
  import {useProductStore} from "~/stores/product";
  const productStore = useProductStore()

  const featuredProducts = computed(() => productStore.products.slice(0,4))
</script>