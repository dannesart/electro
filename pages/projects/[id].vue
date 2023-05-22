<template>
    <NuxtLayout>
        <Headline size="1">
            {{ id }}
        </Headline>
    </NuxtLayout>
</template>

<script setup>
const { id } = useRoute().params;
</script>