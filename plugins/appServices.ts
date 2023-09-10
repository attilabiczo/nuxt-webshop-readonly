import ProductService from '~/services/ProductService'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()

    return {
        provide: {
          productService: new ProductService(runtimeConfig.public.apiBase, 'products')
        }
    }
  })