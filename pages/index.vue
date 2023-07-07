<template>
    <NuxtLayout>
        <Carousel class="mb-24 "></Carousel>
        <Headline size="2">
            Senaste projekten
        </Headline>
        <section class="flex flex-col md:flex-row gap-10 justify-between" id="articles"
            :class="{ 'animated': hasBeenShowed }">
            <Card route="/articles/grejs"></Card>
            <Card route="/projects/hello"></Card>
            <Card></Card>
            <Card></Card>
        </section>

        <Headline size="2">
            Aktuellt
        </Headline>
        <section class="flex flex-col md:flex-row gap-10 justify-between" id="articles"
            :class="{ 'animated': hasBeenShowed }">
            <Card route="/articles/grejs"></Card>
            <Card route="/projects/hello"></Card>
            <Card></Card>
            <Card></Card>
        </section>

    </NuxtLayout>
</template>
<script setup>


const hasBeenShowed = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(
            (entry) => {
                if (entry.isIntersecting && !hasBeenShowed.value) {
                    hasBeenShowed.value = true;
                    console.log("SHOW")
                }
            },
            {
                threshold: 0.5,
            }
        );
    });

    const articles = document.getElementById('articles');
    observer.observe(articles);
});


</script>

<style scoped>
#articles>a {
    transform: translateY(200px);
    opacity: 0;
}

.animated>a {

    animation: show 0.6s ease-in-out forwards;
}

.animated>a:nth-child(2) {
    animation-delay: 200ms;
}

.animated>a:nth-child(3) {
    animation-delay: 400ms;
}

.animated>a:nth-child(4) {
    animation-delay: 600ms;
}

@keyframes show {
    to {
        transform: translate(0, 0);
        opacity: 1;
    }
}
</style>