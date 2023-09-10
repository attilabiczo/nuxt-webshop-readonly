<template>
  <div>
    <div class="w-full bg-custom-blue border-b sm:block hidden">
      <ul class="flex items-center justify-end text-white mx-auto px-2 h-10 max-w-[1000px]">
        <li class="flex items-center px-3 text-[#FFFFFF] hover:text-slate cursor-pointer">
          <NuxtLink to="/products" class="flex items-center">
            Products
          </NuxtLink>
        </li>
        <li class="flex items-center px-3 mr-2 text-[#FFFFFF] hover:text-slate cursor-pointer">
          <NuxtLink to="/cart" class="flex items-center">
            Cart
          </NuxtLink>
        </li>
        <li class="flex items-center border-l border-l-[#FFFFFF] text-[#FFFFFF] pl-4">
          Theme
          <select v-model="colorMode.preference" class="border rounded-md ml-2 w-24 h-6 bg-custom-blue text-[#FFFFFF] border-gray-700">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </li>
      </ul>
    </div>
    <div class="flex items-center w-full bg-white">
      <div class="flex lg:justify-between justify-between max-w-[1000px] w-full px-2 py-5 mx-auto">
        <MainLogo />

        <div v-if="cartStore.cartLength > 0" class="flex items-center">
          <div class="flex border border-custom-orange rounded-md h-1/2 sm:h-[100%]">
            <div class="flex items-center p-1 px-2">
              <div class="relative" @mouseenter="isCartHover = true" @mouseleave="isCartHover = false">
                <span class="absolute flex items-center justify-center -right-[3px] top-0 bg-custom-orange h-[20px] min-w-[17px] text-sm text-[#FFFFFF] p-1 rounded-full border border-custom-blue">
                    {{ cartStore.cartLength }}
                </span>
                <div class="min-w-[40px]">
                  <Icon name="ph:shopping-cart-simple" size="33" class="text-custom-blue" :class="[isCartHover ? 'text-custom-dark-blue' : '']" />
                </div>
              </div>
            </div>
            <NuxtLink to="/cart">
              <button class="flex items-center h-[100%] px-2 bg-custom-orange hover:bg-custom-dark-orange text-[#FFFFFF] uppercase">
                Checkout
                <Icon name="mdi:chevron-right" size="20" color="#ffffff"/>
              </button>
            </NuxtLink>
          </div>

          <button @click="layoutStore.openMenu" class="sm:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200">
            <Icon name="ph:list" size="33" />
          </button>
        </div>

      </div>
    </div>
  </div>

  <div class="pt-[40px] pb-[80px] border-t border-t-[#cccccc]">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { useLayoutStore } from '~/stores/layout';
  import { useCartStore } from "~/stores/cart";

  const layoutStore = useLayoutStore()
  const cartStore = useCartStore()

  const colorMode = useColorMode()
  const isCartHover = ref(false)
</script>
