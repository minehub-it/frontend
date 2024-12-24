<script setup lang="ts">
defineProps<{
  id: number
  title: string
}>()
</script>

<template>
  <v-btn
      icon flat :ripple="false"
      :width="16" :min-width="16"
      size="x-large"
      color="transparent" class="px-4"
      v-bind="externalUrlProps(patreonCheckoutLink(id))"
  >
    <slot name="icon" />
    <v-tooltip activator="parent" :text="title" location="bottom" />
  </v-btn>
</template>

<style scoped lang="scss">

</style>