<template>
  <NuxtLink v-if="!cartStore.isInCart(product.id)" @click="cartStore.addToCart(product)" class="underline cursor-pointer font-bold py-1.5">
    Buy
  </NuxtLink>
  <div v-else class="flex items-center justify-between">
    <button @click="cartStore.decreaseAmount(product.id)" :disabled="cartItem?.amount === product.minOrderAmount && product.minOrderAmount > 1" class="rounded p-2 disabled:bg-[#cccccc] bg-custom-orange hover:bg-custom-dark-orange text-[#FFFFFF] text-xs uppercase ml-0">
      <Icon name="mdi:minus" size="20"/>
    </button>
    <div class="px-4 flex justify-center mx-auto w-[50px]">
      {{ cartItem?.amount }}
    </div>
    <button @click="cartStore.increaseAmount(product.id)" :disabled="product.availableAmount === 0" class="rounded p-2 disabled:bg-[#cccccc] bg-custom-orange hover:bg-custom-dark-orange text-[#FFFFFF] text-xs uppercase">
      <Icon name="mdi:plus" size="20"/>
    </button>
  </div>
</template>

<script setup lang="ts">
  import type { ProductType } from "~/types";
  import {useCartStore} from "~/stores/cart";

  interface Props {
    product: ProductType
  }

  const props = defineProps<Props>()
  const { product } = toRefs(props)

  const cartStore = useCartStore()
  const cartItem = computed(() => cartStore.getCartItem(product.value.id))
</script>