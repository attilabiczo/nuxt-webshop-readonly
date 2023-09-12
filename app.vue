<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <MenuOverlay :class="[layoutStore.isMenuOpen ? 'max-h-[100vh] transition-all duration-200 ease-in visible' : 'max-h-0 transition-all duration-200 ease-out invisible']" />
</template>

<script setup lang="ts">
import { useLayoutStore } from '~/stores/layout'
import { useProductStore } from "~/stores/product"

const layoutStore = useLayoutStore()
const productStore = useProductStore()

let windowWidth = ref(process.client ? window.innerWidth : 0)

watch(() => windowWidth.value, () => {
  if (windowWidth.value >= 640) {
    layoutStore.closeMenu()
  }
})

onBeforeMount(async () => {
  await productStore.fetchProducts()
})

onMounted(() => {
  window.addEventListener('resize', function () {
    windowWidth.value = window.innerWidth
  })
})
</script>
