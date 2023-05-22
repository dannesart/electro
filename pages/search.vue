<template>
    <NuxtLayout>
        <Headline>
            Search result for <span class="text-pink-400">{{ useRoute().query.query }}</span> </Headline>

        <p class="text-gray-500">
            Showing 4 out of 12 results
        </p>

        <section class="flex">

            <Card></Card>
        </section>


    </NuxtLayout>
</template>

<script setup lang="ts">


</script>