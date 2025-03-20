<template>
  <v-app>
    <MainHeader class="hidden-md-and-up"/>

    <NuxtLayout/>
  </v-app>
</template>

<script setup lang="ts">
const bannerFeaturedStore = useBannerFeaturedStore()
const serverListStore = useServerListStore()
const serverCategoryStore = useServerCategoryStore()

await serverCategoryStore.initialize()
await serverListStore.fetchFromContent()

onMounted(async () => {
  await serverListStore.fetchPlayers()
  await bannerFeaturedStore.fetchBannerFeatured()
})
</script>