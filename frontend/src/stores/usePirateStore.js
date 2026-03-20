import { reactive } from "vue";
import { api } from "@utils/http.mjs";
import { defineStore } from "pinia";

export const usePirateStore = defineStore('pirates', ()=>{
    const pirates = reactive([])

    async function getPirates() {
        const response = await api.get('pirates')
        Object.assign(pirates, response.data.data)
    }

    async function getPirate(id) {
        const response = await api.get(`pirates/${id}`)
        return response.data.data
    }

    async function createPirate(data) {
        const response = await api.post('pirates', data)
        pirates.push(response.data.data)
    }

    return {
        pirates,
        getPirates,
        getPirate,
        createPirate
    }
})