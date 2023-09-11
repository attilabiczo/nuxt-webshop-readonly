import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
    const isMenuOverlay = ref<boolean>(false)

    const isMenuOpen = computed(() => {
        return isMenuOverlay.value === true
    })

    function openMenu() {
        isMenuOverlay.value = true
    }

    function closeMenu() {
        isMenuOverlay.value = false
    }

    return {
        isMenuOpen,
        openMenu,
        closeMenu
    }
})