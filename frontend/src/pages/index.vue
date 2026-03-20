<script setup>
import BaseLayout from '@layouts/BaseLayout.vue'
import BaseTable from '@components/BaseTable.vue';
import { usePirateStore } from '@stores/usePirateStore';
</script>

<template>
  <BaseLayout>
    <RouterLink to="/pirates/create" class="w-fit block p-2 my-3 rounded-md text-white bg-gray-600 hover:bg-gray-800">Új Kalóz</RouterLink>
    <BaseTable :pirates="usePirateStore().pirates"/>
  </BaseLayout>
</template>

<route lang="yaml">
name: index
meta:
  title: Főoldal
</route>
