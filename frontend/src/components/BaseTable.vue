<script setup>
const {pirates} = defineProps({
    pirates: Array
})

</script>

<template>
    <div class="overflow-x-auto bg-white rounded-lg shadow">
        <table class="min-w-full text-left text-sm whitespace-nowrap">
            <thead class="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50 text-gray-600">
                <tr>
                    <th scope="col" class="px-6 py-4">Kalóz</th>
                    <th scope="col" class="px-6 py-4">Hajó</th>
                    <th scope="col" class="px-6 py-4">Vérdíj</th>
                    <th scope="col" class="px-6 py-4">Állapot</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <tr class="hover:bg-gray-50 transition-colors" v-for="pirate of pirates">
                    <td class="px-6 py-4 font-medium text-gray-900">
                        <RouterLink :to="{name: 'pirates', params: {id: pirate.id}}" class="text-blue-600 hover:text-blue-800 underline">{{ pirate.name }}</RouterLink>
                    </td>
                    <td class="px-6 py-4 text-gray-600">{{ Array.isArray(pirate.ship) ? pirate.ship?.[0].name : pirate.ship?.name }}</td>
                    <!-- A formázást az MDN javascript doksiból vettem: -->
                    <td class="px-6 py-4 text-gray-600">{{ new Intl.NumberFormat('hu-HU', {style: 'currency', currency: 'USD'}).format(pirate.bounty) }}</td>
                    <td class="px-6 py-4">
                        <span
                            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {{ pirate.status }}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>