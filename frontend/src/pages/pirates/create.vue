<route lang="yaml">
    name: create-pirate
    meta:
        title: Új kalóz rögzítése
</route>

<script setup>
import BaseLayout from '@layouts/BaseLayout.vue';
import { usePirateStore } from '@stores/usePirateStore';
import { useShipStore } from '@stores/useShipStore';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const form = reactive({
    'name': '',
    'ship_id': '',
    'bounty': '',
    'weapon': '',
    'age': '',
    'status': '',
    'description': ''
})

async function submitForm() {
    await usePirateStore().createPirate(form)
    router.push("/")
}
</script>

<template>
    <BaseLayout>
        <form class="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-200" @submit.prevent="submitForm">
            <h2 class="text-2xl font-bold text-slate-800 mb-6">Új kalóz</h2>

            <div class="mb-5">
                <label for="name" class="block mb-2 text-sm font-medium text-slate-700">Név</label>
                <input type="text" id="name" v-model="form.name" required maxlength="25"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            </div>

            <div class="mb-5">
                <label for="ship_id" class="block mb-2 text-sm font-medium text-slate-700">Hajó</label>
                <select id="ship_id" v-model="form.ship_id" 
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="">Válassz hajót...</option>
                    <option v-for="ship of useShipStore().ships" :key="ship.id" :value="ship.id">{{ ship.name }}</option>
                </select>
            </div>

            <div class="mb-5">
                <label for="bounty" class="block mb-2 text-sm font-medium text-slate-700">Vérdíj</label>
                <input type="number" id="bounty" v-model="form.bounty" required min="1000" max="1000000"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            </div>

            <div class="mb-5">
                <label for="weapon" class="block mb-2 text-sm font-medium text-slate-700">Fegyver</label>
                <input type="text" id="weapon" v-model="form.weapon" required
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            </div>

            <div class="mb-5">
                <label for="age" class="block mb-2 text-sm font-medium text-slate-700">Kor</label>
                <input type="number" id="age" v-model="form.age" required min="20" max="60"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            </div>

            <div class="mb-5">
                <label for="status" class="block mb-2 text-sm font-medium text-slate-700">Állapot</label>
                <select id="status" v-model="form.status"
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="Active">Active</option>
                    <option value="Captured">Captured</option>
                    <option value="Deceased">Deceased</option>
                </select>
            </div>

            <div class="mb-5">
                <label for="description" class="block mb-2 text-sm font-medium text-slate-700">Leírás</label>
                <textarea id="description" rows="3" v-model="form.description" required
                    class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>
            </div>

            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-colors">
                Rögzítés
            </button>
        </form>
    </BaseLayout>
</template>