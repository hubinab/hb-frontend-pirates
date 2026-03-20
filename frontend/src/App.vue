<script setup>
import { onMounted } from 'vue';
import { usePirateStore } from '@stores/usePirateStore';
import { useShipStore } from '@stores/useShipStore';

onMounted(() => {
  usePirateStore().getPirates()
  useShipStore().getShips()
})
</script>

<template>
  <RouterView />
</template>
