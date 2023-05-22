<template>
    <nav class="flex gap-5 md:gap-10 items-center text-xl ">

        <ul class="flex gap-10 absolute z-40 md:static top-0 right-0 left-0 bottom-0 bg-white p-10 md:p-0 flex-col md:flex-row "
            :class="{ 'max-md:hidden': !showingMenu }">
            <li v-for="page in pageStore.pages">
                <NuxtLink :to="page.route" class="hover:text-pink-400" active-class="text-pink-400">
                    {{ page.name }}
                </NuxtLink>
            </li>
        </ul>

        <div tabindex=0
            class="fixed top-0  left-0 right-0 -translate-y-full p-5 md:p-10 shadow-xl z-[60] bg-white transition-transform"
            :class="{ 'translate-y-0': showingSearch }" :aria-hidden="!showingSearch">
            <div class="max-w-[1700px] mx-auto flex flex-col gap-5 px-5 md:px-10 ">
                <label class="text-gray-600">
                    Search for projects or pages
                </label>
                <div class="flex gap-6 items-center">
                    <input ref="searchField" v-model="searchModel" type="search" @keyup="search"
                        class="p-3 px-6 flex-1 placeholder:text-pink-400 outline-none bg-pink-50 rounded-xl"
                        placeholder="Search" />
                    <Button @click="search">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                v-if="showingSearch" />
                        </svg>
                    </Button>
                </div>
                <Loader v-if="searching"></Loader>

            </div>
        </div>
        <div class="fixed top-0 left-0 right-0 bottom-0 bg-pink-800 opacity-40 z-50" v-if="showingSearch"
            @click="toggleSearch">
        </div>


        <Button type="icon" @click="toggleSearch" v-if="!showingSearch">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" v-if="!showingSearch" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" v-if="showingSearch" />
            </svg>

        </Button>
        <Button type="icon" class="md:hidden relative z-50" @click="toggleMenu()" v-if="!showingSearch">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" v-if="!showingMenu" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" v-if="showingMenu" />
            </svg>

        </Button>

    </nav>
</template>

<script setup lang="ts">

import { usePageStore } from '~~/stores/page';
const pageStore = usePageStore();
const router = useRouter();

const showingMenu = ref(false);
const toggleMenu = () => { showingMenu.value = !showingMenu.value; showingSearch.value = false; }

const showingSearch = ref(false);
const searchField = ref();
const searching = ref(false);
const toggleSearch = () => {
    showingSearch.value = !showingSearch.value;
    showingMenu.value = false;
    if (showingSearch.value) {
        searchField.value.focus()
    }
}

let searchModel: string;
let searchTimeOut: any;
const search = (e: Event & { key: string, code: string }) => {

    if (e.key === 'Escape') {
        return toggleSearch();
    }

    if (searchTimeOut) {
        clearTimeout(searchTimeOut)
    }

    if (searchModel.length < 3) return;

    if (!e.key || e.key === "Enter" || e.code === "Enter") {
        toggleSearch();
        return router.push({
            path: '/search',
            query: {
                query: searchModel
            }
        })
    }


    searchTimeOut = setTimeout(() => {
        searching.value = true;

        setTimeout(() => {
            searching.value = false;
        }, 5000)

    }, 1000)
}




</script>