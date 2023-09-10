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

let windowWidth = ref(process.client ? window.innerWidth : '')

watch(() => windowWidth.value, () => {
  if (windowWidth.value >= 767) {
    layoutStore.closeMenu()
  }
})

onBeforeMount(async () => {
  productStore.fetchProducts(async () => {
    const response = await fetch('https://63c10327716562671870f959.mockapi.io/products')
    return await response.json()
  })
})

onMounted(() => {
  window.addEventListener('resize', function () {
    windowWidth.value = window.innerWidth
  })
})
</script>
