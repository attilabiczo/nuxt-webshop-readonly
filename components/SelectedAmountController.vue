<template>
  <NuxtLink v-if="!isInCart" 
    class="underline cursor-pointer font-bold py-1.5 text-custom-orange hover:text-custom-secondary-orange"
    @click="onBuyLinkClick">
    Buy
  </NuxtLink>
  <div v-else class="flex items-center justify-between">
    <button class="rounded p-2 disabled:bg-[#cccccc] bg-custom-orange hover:bg-custom-secondary-orange text-[#FFFFFF] text-xs uppercase ml-0"
      @click="onDecreaseAmountClick" 
      :disabled="isDecrementButtonDisabled" >
      <Icon name="mdi:minus" size="20"/>
    </button>
    <div class="px-4 flex justify-center mx-auto w-[50px]">
      {{ cartItem?.amount }}
    </div>
    <button class="rounded p-2 disabled:bg-[#cccccc] bg-custom-orange hover:bg-custom-secondary-orange text-[#FFFFFF] text-xs uppercase"
      @click="onIncreaseAmountClick" 
      :disabled="isIncrementButtonDisabled" >
      <Icon name="mdi:plus" size="20"/>
    </button>
  </div>
</template>

<script setup lang="ts">
  import type { CartItemType, ProductType } from "~/types";
  import {useCartStore} from "~/stores/cart";

  interface Props {
    product: ProductType,
    isInCart: boolean
  }

  const props = defineProps<Props>()
  const { product, isInCart } = toRefs(props)

  const emit = defineEmits<{
    onAddToCart: [product: ProductType],
    onDecreaseAmount: [id: string],
    onIncreaseAmount: [id: string]
  }>()

  const cartStore = useCartStore()

  const cartItem = computed(() => cartStore.getCartItem(product.value.id) as CartItemType)

  const isDecrementButtonDisabled = computed(() => cartItem.value.amount === product.value.minOrderAmount && product.value.minOrderAmount > 1)
  const isIncrementButtonDisabled = computed(() => product.value.availableAmount === 0)

  const onBuyLinkClick = () => emit('onAddToCart', product.value)
  const onDecreaseAmountClick = () => emit('onDecreaseAmount', product.value.id)
  const onIncreaseAmountClick = () => emit('onIncreaseAmount', product.value.id)


</script>