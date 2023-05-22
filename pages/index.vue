<template>
    <NuxtLayout>
        <Carousel class="mb-24 "></Carousel>
        <Headline size="2">
            Latest projects
        </Headline>
        <section class="flex flex-col md:flex-row gap-10 justify-between">
            <Card route="/articles/grejs"></Card>
            <Card route="/projects/hello"></Card>
            <Card></Card>
            <Card></Card>
        </section>

    </NuxtLayout>
</template>
<script setup></script>