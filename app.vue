<template>
  <NuxtPage></NuxtPage>
</template>
<script setup>

import { usePageStore } from './stores/page';

const { getPages } = usePageStore();

await getPages();

</script>