<template>
  <PageContainer>
    <Breadcrumb />
    <h1 class="text-3xl mb-6">Cart</h1>
    <div v-if="cartStore.isCartEmpty">
      Cart is empty
    </div>
    <div v-else class="flex flex-col">
      <CartItem class="flex-[1_1_100%] max-w-[100%]"
                :cart-item="cartItem" v-for="cartItem in cartStore.cartItems" :key="cartItem.id" />
      <div class="flex justify-center text-2xl my-4">
        <span class="uppercase mr-2">Total:</span>
        <span class="font-bold">${{totalSum}}</span>
      </div>
    </div>

  </PageContainer>
</template>

<script setup lang="ts">
  import {useCartStore} from "~/stores/cart";
  const cartStore = useCartStore()

  const totalSum = computed(() => {
    let sum = 0;

    cartStore.cartItems.forEach((item) => {
      sum += (item.amount * item.price)
    })

    return sum.toFixed(1)
  })
</script>