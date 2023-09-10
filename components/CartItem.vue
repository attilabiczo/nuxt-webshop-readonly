<template>
  <div class="flex items-center border-b border-b-[#cccccc]">
    <div class="h-[140px] w-[140px] min-w-[140px] flex items-center">
      <figure class="block" style="margin:revert">
        <img class="h-auto w-auto" :src="cartItem?.img">
      </figure>
    </div>
    <div class="flex flex-wrap items-center justify-between flex-1">
      <div class="flex flex-col sm:flex-row items-center sm:justify-around sm:flex-1">
        <div>{{cartItem?.name}}</div>
        <div><SelectedAmountController :product="productItem" class="visible sm:hidden mt-2" /></div>
      </div>
      <div class="flex items-center">
        <div><SelectedAmountController :product="productItem" class="hidden sm:visible sm:flex mt-2" /></div>
        <div class="text-md w-[71px] text-right mt-2">${{ (cartItem?.amount * cartItem?.price).toFixed(1) }}</div>
        <button @click="cartStore.removeFromCart(cartItem)"  class="rounded p-2 ml-4 mt-2 disabled:bg-[#cccccc] bg-custom-orange hover:bg-custom-secondary-orange text-[#FFFFFF] text-xs uppercase ml-0">
          <Icon name="mdi:delete-forever" size="20"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { CartItemType, ProductType } from "~/types";
  import { useProductStore } from "~/stores/product";
  import { useCartStore } from "~/stores/cart";

  interface Props {
    cartItem: CartItemType
  }

  const props = defineProps<Props>()
  const { cartItem } = toRefs(props)

  const cartStore = useCartStore()
  const productStore = useProductStore()
  const productItem = computed(() => productStore.getProduct(cartItem.value.id) as ProductType)
</script>
