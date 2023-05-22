<template>
    <component :is="headline.tag" :class="['first-letter:capitalize', ...headline.classes]">
        <slot />
    </component>
</template>

<script setup>

const commonClasses = ['text-gray-600', 'font-bold']

const sizes = [{
    tag: 'h1',
    classes: [
        'text-5xl',
        'md:text-8xl',
        'leading-[80px]',
        ...commonClasses
    ]
}, {
    tag: 'h2',
    classes: [

        'text-3xl',
        'md:text-6xl',
        'leading-[60px]',
        'md:leading-[80px]',
        ...commonClasses
    ]
}, {
    tag: 'h3',
    classes: [
        'text-2xl',
        'md:text-4xl',
        ...commonClasses
    ]
}];
const { size } = defineProps(['size']);
const headline = sizes[(size || 1) - 1];

</script>