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

        <div class="fixed bottom-10 left-10 right-10 p-10 rounded-xl bg-pink-200 z-[100] flex flex-col gap-5"
            v-if="!hideCookie">
            <Headline size="3">Acceptera cookies</Headline>
            <p>
                Accepterar du användning av coookies?
                Vi använder cookies enbart till statistik. Google analytics.
            </p>
            <div class="flex gap-5">
                <Button @click="setRejected()">
                    Neka
                </Button>
                <Button @click="setAccepted()">
                    Tillåt alla
                </Button>

            </div>
        </div>

    </div>
</template>

<script setup>

const hideCookie = ref(true);


onMounted(() => {
    hideCookie.value = localStorage.getItem('cookie-accepted');
})

const setRejected = () => {
    localStorage.setItem('cookie-accepted', "false")
    hideCookie.value = localStorage.getItem('cookie-accepted');
}

const setAccepted = () => {
    localStorage.setItem('cookie-accepted', "true")
    hideCookie.value = localStorage.getItem('cookie-accepted');
}

</script>