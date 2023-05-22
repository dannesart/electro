<template>
    <NuxtLink :to="route">
        <article class="flex flex-col gap-12 p-6 pb-12 rounded-3xl shadow-xl bg-white max-w-sm transition-all"
            :class="{ 'hover:shadow-2xl hover:-translate-y-3 ': hasRoute() }">

            <div class="h-60 rounded-2xl bg-gray-200"></div>
            <div class="flex flex-col gap-6">
                <Headline size="3">
                    Söker ny medarbetare
                </Headline>
                <p>
                    Rådgivning och projektering av elsystem till
                    byggprojektansvariga inom företag....
                </p>
            </div>

        </article>
    </NuxtLink>
</template>

<script setup>

const { route } = defineProps(['route'])

const hasRoute = () => {
    if (route) return true;
    return false;
}

</script>