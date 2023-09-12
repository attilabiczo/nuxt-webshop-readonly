<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <template v-else>
            <div v-if="hasError" class="pl-6 text-[#d11100] text-[20px] text-center sm:text-left">
                <Icon name="mdi:heart-broken" size="48"/>
                Something went wrong, try it later...
            </div>
            <slot v-else />
        </template>
    </div>
</template>

<script setup lang="ts">
  interface Props {
    isLoading: boolean,
    hasError: boolean
  }

  const props = defineProps<Props>()
</script>