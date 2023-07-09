<template>
    <NuxtLayout>
        <Headline>
            Sökresultat för <span class="text-pink-400">{{ useRoute().query.query }}</span> </Headline>

        <p class="text-gray-500">
            Visar 4 av 12 resultat
        </p>

        <section class="flex">

            <Card></Card>
        </section>


    </NuxtLayout>
</template>

<script setup lang="ts">


</script>