<template>
    <button class="bg-pink-300 text-white rounded-xl" :class="{
        'p-3': type === 'icon',
        'px-6 py-3': type !== 'icon'
    }">
        <slot />
    </button>
</template>

<script setup>

const { type } = defineProps(['type']);


</script>