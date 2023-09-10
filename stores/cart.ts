import { defineStore } from 'pinia'
import { useProductStore } from "~/stores/product";
import type { ProductType, CartItemType } from "~/types";

export const useCartStore = defineStore('cart', () => {
    const productStore = useProductStore()

    const cart = ref<CartItemType[]>([])

    const cartLength = computed(() => cart.value.length)

    const isCartEmpty = computed(() => cart.value.length === 0)

    const cartItems = computed(() => cart.value)

    function getCartItem(id: string) {
        return cart.value.find(item => id === item.id)
    }

    function isInCart(id: string) {
        const cartItem = getCartItem(id)
        return !!cartItem
    }

    function addToCart(product: ProductType) {
        cart.value.push({
            id: product.id,
            price: product.price,
            amount: product.minOrderAmount,
            img: product.img,
            name: product.name
        })

        const productFromStore = productStore.getProduct(product.id)
        if (productFromStore) {
            product.availableAmount -= product.minOrderAmount
        }
    }

    function removeFromCart(cartItem: CartItemType) {
        const indexOfItem = cart.value.indexOf(cartItem)
        cart.value.splice(indexOfItem, 1);
    }

    function decreaseAmount(id: string) {
        const cartItem = getCartItem(id)
        const product = productStore.getProduct(id)

        if (cartItem && product) {
            cartItem.amount -= 1;
            product.availableAmount += 1;

            if (cartItem.amount === 0) {
                removeFromCart(cartItem)
            }
        }
    }

    function increaseAmount(id: string) {
        const cartItem = getCartItem(id)
        const product = productStore.getProduct(id)


        if (cartItem && product) {
            cartItem.amount += 1;
            product.availableAmount -= 1;
        }
    }

    return {
        cartLength,
        isCartEmpty,
        cartItems,
        getCartItem,
        isInCart,
        addToCart,
        removeFromCart,
        decreaseAmount,
        increaseAmount
    }
})