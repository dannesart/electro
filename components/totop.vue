<template>
    <Button type="icon" class="fixed bottom-10 right-10" :class="{ 'hidden': !shouldShow }" @click="scrollTop">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
        </svg>

    </Button>
</template>

<script setup>

const shouldShow = ref(false);
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(
            (entry) => {
                shouldShow.value = !entry.isIntersecting;
            },
            {
                threshold: 0.5,
            }
        );
    });

    const header = document.querySelector('[name=main-header]');
    observer.observe(header);
});

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

</script>