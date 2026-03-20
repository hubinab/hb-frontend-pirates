<script setup>
const {pirate} = defineProps({
    title: String,
    content: String
})
</script>

<template>
    <div class="border-1 border-slate-200 rounded-xl">
        <h3 class="text-slate-800 p-2 font-bold text-xl">{{ title }}</h3>
        <p class="text-slate-600 p-4 text-center">{{ content }}</p>
    </div>
</template>