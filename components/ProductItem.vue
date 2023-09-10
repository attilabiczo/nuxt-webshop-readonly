<template>
  <div class="group flex flex-col justify-between rounded p-2 hover:bg-[#FFFFFF] hover:scale-105 hover:shadow-outline">
    <div class="bg-[#FFFFFF] border border-[#cccccc] group-hover:border-custom-orange rounded relative">
      <div class="h-[160px] w-[160px] flex items-center mx-auto relative">
        <div class="flex items-center">
          <figure class="block" style="margin:revert">
            <img class="h-auto w-auto" :src="product.img">
          </figure>
        </div>
      </div>
      <div class="text-center border-t border-t-[#cccccc] mx-2">
        <p class="p-1 text-md text-custom-blue">
          {{ product.name }}
        </p>
        <span class="text-custom-dark-orange font-semibold">${{ product.price }}</span>
      </div>
      <div class="flex justify-center my-2">
        <SelectedAmountController :product="product" />
      </div>
      <div class="absolute top-0 left-0 z-60 text-xs w-full">
        <div v-if="product.minOrderAmount > 1" class="flex items-center justify-center p-2 w-full text-[#FFFFFF] bg-[#d11100] opacity-70">
          Minimum {{ product.minOrderAmount }} pcs
        </div>
        <div v-if="cartStore.isInCart(product.id)" class="flex items-center justify-between p-2 w-full text-[#FFFFFF] bg-[#8ab537] opacity-70">
          <div class="text-center">{{ cartItem?.amount }} pcs for ${{ (cartItem?.amount * cartItem?.price).toFixed(1) }} in your card</div>
          <button @click="cartStore.removeFromCart(cartItem)">
            <Icon name="mdi:delete-forever" size="20" class="text-[#FFFFFF] hover:text-custom-dark-orange cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ProductType } from "~/types";
  import { useCartStore } from "~/stores/cart";

  interface Props {
    product: ProductType
  }

  const props = defineProps<Props>()
  const { product } = toRefs(props)

  const cartStore = useCartStore()
  const cartItem = computed(() => cartStore.getCartItem(product.value.id))
</script>