<script setup lang="ts">
defineProps<{
  href: string
  image: string
}>()
</script>

<template>
  <v-card :href="href" target="_blank" rounded>
    <v-img cover :src="image" />
  </v-card>
</template>