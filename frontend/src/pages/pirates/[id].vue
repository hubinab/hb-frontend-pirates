<route lang="yaml">
name: pirates
meta: 
    title: Kalóz adatlap
</route>

<script setup>
import BaseLayout from '@layouts/BaseLayout.vue';
import BaseCard from '@components/BaseCard.vue';
import { usePirateStore } from '@stores/usePirateStore';
import { onMounted } from 'vue';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const pirate = reactive({})
const route = useRoute()
let bounty = ''
let age = ''

onMounted(async () => {
    Object.assign(pirate, await usePirateStore().getPirate(route.params.id))
    // A formázást az MDN javascript doksiból vettem:
    bounty = new Intl.NumberFormat('hu-HU', {style: 'currency', currency: 'USD'}).format(pirate.bounty)
    age = pirate.age.toString()
})

</script>

<template>
    <BaseLayout>
        <h1 class="text-center py-2 text-6xl">{{ pirate.name }}</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <BaseCard title="Vérdíj" :content="bounty"/>
            <BaseCard title="Kor" :content="age"/>
            <BaseCard title="Állapot" :content="pirate.status"/>
            <BaseCard title="Megjegyzés" :content="pirate.description"/>
        </div>
    </BaseLayout>
</template>