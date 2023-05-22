<template>
    <div class="layout">
        <header class="flex justify-between p-5 md:p-10 max-w-[1700px] mx-auto top-0 bg-white z-50" name="main-header">
            <NuxtLink to="/" class="h-14 w-40 flex gap-3 text-3xl text-gray-600">
                <div class="text-6xl">
                    EE
                </div>
                <div class="flex flex-col text-3xl text-gray-600">
                    electro
                    <span class="text-base ">engineering</span>
                </div>
            </NuxtLink>
            <Menu></Menu>
        </header>
        <main class="flex flex-col p-5 md:p-10 md:gap-10 max-w-[1700px] mx-auto">
            <slot />
        </main>
        <Totop></Totop>
    </div>
</template>

<script setup>

</script>