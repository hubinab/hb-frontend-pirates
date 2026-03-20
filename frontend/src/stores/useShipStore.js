import { reactive } from "vue";
import { api } from "@utils/http.mjs";
import { defineStore } from "pinia";

export const useShipStore = defineStore('ships', ()=>{
    const ships = reactive([])

    async function getShips() {
        const response = await api.get('ships')
        Object.assign(ships, response.data.data)
    }

    return {
        ships,
        getShips
    }
})