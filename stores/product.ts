import { defineStore } from 'pinia'
import type { ProductType } from "~/types";
import placeholderProductImage from '~/assets/product-placeholder-image.jpg';

export const useProductStore = defineStore('product', () => {
    const productList = ref<ProductType[]>([])
    const isLoading = ref<boolean>(false)
    const hasError = ref<boolean>(false)

    const { $productService } = useNuxtApp()

    const products = computed(() => {
        return productList.value
    })

    function getProduct(id: string) {
        return productList.value.find(item => id === item.id)
    }

    async function fetchProducts(/*callback: Function*/) {
        isLoading.value = true
        hasError.value = false

        try {
            // Simulate expensive service call
            //await new Promise((res) => setTimeout(res, 3000))

            const resultProducts = await $productService.getProducts()
            for (const resultProductsKey in resultProducts) {
                let product = resultProducts[resultProductsKey]
                if (product.img.indexOf('jpg') < 0) {
                    product.img = placeholderProductImage;
                }
            }
            productList.value = [...resultProducts]
        }
        catch {
            hasError.value = true
        }

        isLoading.value = false
    }

    return {
        fetchProducts,
        isLoading,
        hasError,
        products,
        getProduct
    }
})