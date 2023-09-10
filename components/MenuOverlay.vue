<template>
  <div class="fixed z-50 bottom-0 h-full w-full bg-[#FFFFFF] px-2">
    <div class="flex items-center justify-between py-5">
      <MainLogo />
      <button @click="closeMenu"
              class="rounded-full p-1 text-custom-blue hover:text-custom-dark-blue">
        <Icon name="mdi:close" size="30"/>
      </button>
    </div>

    <div class="flex items-center justify-between pt-5">
      <ul class="w-full">
        <li @click="goTo('products')"
            class="relative flex items-center justify-between py-2.5 border-b border-b-[#cccccc] px-3 text-custom-blue hover:text-custom-dark-blue cursor-pointer">
          <div class=" flex items-center text-[20px] font-semibold">
            <span class="pl-4">Products</span>
          </div>
        </li>

        <li @click="goTo('cart')"
            class="group relative flex items-center justify-between py-2.5 border-b border-b-[#cccccc] px-3 text-custom-blue hover:text-custom-dark-blue cursor-pointer">
          <div class=" flex items-center text-[20px] font-semibold">
            <span class="pl-4">Cart</span>
          </div>
          <div class=" flex items-center justify-center bg-custom-orange group-hover:bg-custom-dark-orange h-[35px] min-w-[35px] text-lg text-[#FFFFFF] rounded-full">
            {{ cartStore.cartLength }}
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '~/stores/layout'
import { useCartStore } from '~/stores/cart'
const layoutStore = useLayoutStore()
const cartStore = useCartStore()

const goTo = (url) => {
  layoutStore.closeMenu()
  return navigateTo(`/${url}`)
}
</script>