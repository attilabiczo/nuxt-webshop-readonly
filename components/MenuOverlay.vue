<template>
  <div class="fixed z-50 bottom-0 h-full w-full bg-[#FFFFFF] dark:bg-custom-dark-background px-2">
    <div class="flex items-center justify-between py-5">
      <MainLogo />
      <button class="rounded-full p-1 text-custom-blue hover:text-custom-secondary-blue dark:text-custom-orange dark:hover:text-custom-secondary-orange"
        @click="layoutStore.closeMenu">
        <Icon name="mdi:close" size="30"/>
      </button>
    </div>

    <div class="w-full flex flex-col items-center justify-between pt-5">
      <ul class="w-full">
        <li class="relative flex items-center justify-between py-2.5 border-b border-b-[#cccccc] dark:border-b-custom-secondary-orange px-3 text-custom-blue hover:text-custom-secondary-blue dark:text-custom-orange dark:hover:text-custom-secondary-orange cursor-pointer"
          @click="goTo('products')">
          <div class=" flex items-center text-[20px] font-semibold">
            <span class="pl-4">Products</span>
          </div>
        </li>

        <li class="group relative flex items-center justify-between py-2.5 border-b border-b-[#cccccc] dark:border-b-custom-secondary-orange px-3 text-custom-blue hover:text-custom-secondary-blue dark:text-custom-orange dark:hover:text-custom-secondary-orange cursor-pointer"
          @click="goTo('cart')">
          <div class=" flex items-center text-[20px] font-semibold">
            <span class="pl-4">Cart</span>
          </div>
          <div class="flex items-center justify-center bg-custom-orange group-hover:bg-custom-secondary-orange h-[35px] min-w-[35px] text-lg text-[#FFFFFF] rounded-full"
            v-if="!cartStore.isCartEmpty">
            {{ cartStore.cartLength }}
          </div>
        </li>

        <li class="flex justify-center py-3 text-custom-blue dark:text-custom-orange">
          <ThemeSelector />
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

const goTo = (url: string) => {
  layoutStore.closeMenu()
  return navigateTo(`/${url}`)
}
</script>