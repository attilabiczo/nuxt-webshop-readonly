import { defineStore } from 'pinia'
import type { ProductType } from "~/types";

export const useProductStore = defineStore('product', () => {
    const productList = ref<ProductType[]>([])
    const isLoading = ref<boolean>(false)

    const products = computed(() => {
        return productList.value
    })

    function getProduct(id: string) {
        return productList.value.find(item => id === item.id)
    }

    async function fetchProducts(callback) {
        isLoading.value = true

        const resultProducts = await callback()
        productList.value = [...resultProducts]

        isLoading.value = false
    }

    return {
        fetchProducts,
        isLoading,
        products,
        getProduct
    }
})