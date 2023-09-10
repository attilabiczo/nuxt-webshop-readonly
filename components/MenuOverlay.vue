<template>
  <div class="fixed z-50 bottom-0 h-full w-full bg-[#FFFFFF] dark:bg-custom-dark-background px-2">
    <div class="flex items-center justify-between py-5">
      <MainLogo />
      <button @click="layoutStore.closeMenu"
              class="rounded-full p-1 text-custom-blue hover:text-custom-secondary-blue dark:text-custom-orange dark:hover:text-custom-secondary-orange">
        <Icon name="mdi:close" size="30"/>
      </button>
    </div>

    <div class="w-full flex flex-col items-center justify-between pt-5">
      <ul class="w-full">
        <li @click="goTo('products')"
            class="relative flex items-center justify-between py-2.5 border-b border-b-[#cccccc] dark:border-b-custom-secondary-orange px-3 text-custom-blue hover:text-custom-secondary-blue dark:text-custom-orange dark:hover:text-custom-secondary-orange cursor-pointer">
          <div class=" flex items-center text-[20px] font-semibold">
            <span class="pl-4">Products</span>
          </div>
        </li>

        <li @click="goTo('cart')"
            class="group relative flex items-center justify-between py-2.5 border-b border-b-[#cccccc] dark:border-b-custom-secondary-orange px-3 text-custom-blue hover:text-custom-secondary-blue dark:text-custom-orange dark:hover:text-custom-secondary-orange cursor-pointer">
          <div class=" flex items-center text-[20px] font-semibold">
            <span class="pl-4">Cart</span>
          </div>
          <div class=" flex items-center justify-center bg-custom-orange group-hover:bg-custom-secondary-orange h-[35px] min-w-[35px] text-lg text-[#FFFFFF] rounded-full">
            {{ cartStore.cartLength }}
          </div>
        </li>

        <li class="flex justify-center py-3">
          <select v-model="colorMode.preference" class="border border-custom-blue focused:outliner-[#FFFFFF] dark:border-custom-secondary-orange rounded-md ml-2 w-24 h-6 bg-custom-background dark:bg-custom-dark-background text-custom-blue dark:text-custom-orange">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
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

const colorMode = useColorMode()

const goTo = (url: string) => {
  layoutStore.closeMenu()
  return navigateTo(`/${url}`)
}
</script>