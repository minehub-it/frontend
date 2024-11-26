<template>
  <v-app>
    <NuxtLayout />
  </v-app>
</template>

<script setup lang="ts">
// nuxt layer
const serverListStore = useServerListStore()
const serverCategoryStore = useServerCategoryStore()
const serverStorageStore = useServerStorageStore()

await serverCategoryStore.initialize()
await serverListStore.fetchFromContent()

onBeforeMount(async () => {
  await serverStorageStore.restore()
  await serverListStore.fetchPlayers()
})
</script>