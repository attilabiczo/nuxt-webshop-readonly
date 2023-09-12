<template>
    Theme
    <select v-model="colorMode.preference" class="border border-custom-blue focused:outliner-[#FFFFFF] dark:border-custom-secondary-orange rounded-md ml-2 w-24 h-6 bg-custom-background dark:bg-custom-dark-background text-custom-blue dark:text-custom-orange">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</template>

<script setup lang="ts">
    const colorMode = useColorMode()
</script>