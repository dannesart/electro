<template>
    <div class="layout">
        <header class="flex justify-between p-5 md:p-10 max-w-[1700px] mx-auto top-0 bg-white z-50" name="main-header">
            <Logo></Logo>
            <Menu></Menu>
        </header>
        <main class="flex flex-col p-5 md:p-10 gap-6 md:gap-10 max-w-[1700px] mx-auto">
            <slot />
        </main>
        <Totop></Totop>

        <footer class="bg-pink-100 mt-20">

            <div class="flex justify-between max-w-[1700px] p-5 md:p-10 mx-auto">
                <Logo></Logo>
                <section class="flex flex-col gap-6">
                    <Headline size="3">
                        Meny
                    </Headline>
                    <ul class="flex flex-col gap-3">
                        <li v-for="page in pageStore.pages">
                            <NuxtLink :to="page.route" class="hover:text-pink-400" active-class="text-pink-400">
                                {{ page.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </section>

                <section class="flex flex-col gap-6">
                    <Headline size="3">
                        Kontakta oss
                    </Headline>
                    <ul class="flex flex-col gap-3">
                        <li>
                            08-688 28 50
                        </li>
                        <li>
                            info@electro.se
                        </li>
                        <li>
                            Swedenborgsgatan 20B,
                        </li>
                        <li>
                            118 27 Stockholm
                        </li>
                    </ul>
                </section>
            </div>

        </footer>

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
import { usePageStore } from '~~/stores/page';

const pageStore = usePageStore();
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