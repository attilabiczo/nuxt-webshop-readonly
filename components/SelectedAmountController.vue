<template>
  <NuxtLink v-if="!cartStore.isInCart(product.id)" @click="cartStore.addToCart(product)" class="underline cursor-pointer font-bold py-1.5 text-custom-orange hover:text-custom-secondary-orange">
    Buy
  </NuxtLink>
  <div v-else class="flex items-center justify-between">
    <button @click="cartStore.decreaseAmount(product.id)" :disabled="isDecrementButtonDisabled" class="rounded p-2 disabled:bg-[#cccccc] bg-custom-orange hover:bg-custom-secondary-orange text-[#FFFFFF] text-xs uppercase ml-0">
      <Icon name="mdi:minus" size="20"/>
    </button>
    <div class="px-4 flex justify-center mx-auto w-[50px]">
      {{ cartItem?.amount }}
    </div>
    <button @click="cartStore.increaseAmount(product.id)" :disabled="isIncrementButtonDisabled" class="rounded p-2 disabled:bg-[#cccccc] bg-custom-orange hover:bg-custom-secondary-orange text-[#FFFFFF] text-xs uppercase">
      <Icon name="mdi:plus" size="20"/>
    </button>
  </div>
</template>

<script setup lang="ts">
  import type { CartItemType, ProductType } from "~/types";
  import {useCartStore} from "~/stores/cart";

  interface Props {
    product: ProductType
  }

  const props = defineProps<Props>()
  const { product } = toRefs(props)

  const cartStore = useCartStore()
  const cartItem = computed(() => cartStore.getCartItem(product.value.id) as CartItemType)


  const isDecrementButtonDisabled = computed(() => cartItem.value.amount === product.value.minOrderAmount && product.value.minOrderAmount > 1)
  const isIncrementButtonDisabled = computed(() => product.value.availableAmount === 0)
</script>