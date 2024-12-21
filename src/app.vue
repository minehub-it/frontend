<template>
  <v-app>
    <NuxtLayout />
  </v-app>
</template>

<script setup lang="ts">
// server list layer
{
  const serverListStore = useServerListStore()
  const serverCategoryStore = useServerCategoryStore()
  const serverStorageStore = useServerStorageStore()

  await serverCategoryStore.initialize()
  await serverListStore.fetchFromContent()

  onMounted(async () => {
    await serverStorageStore.restore()
    await serverListStore.fetchPlayers()
  })
}
</script>