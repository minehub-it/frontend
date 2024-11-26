<script setup lang="ts">
defineProps<{
  id: number
  title: string
}>()
</script>

<template>
  <v-btn
      icon flat :ripple="false"
      :width="40" :min-width="36"
      size="x-large"
      color="transparent" class="px-4"
      :href="patreonCheckoutLink(id)"
      target="_blank"
  >
    <slot name="icon" />
    <v-tooltip activator="parent" :text="title" location="bottom" />
  </v-btn>
</template>

<style scoped lang="scss">

</style>