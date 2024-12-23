<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  size: number
}>(), {
  name: 'logo',
  size: 48
})
</script>

<template>
  <div class="minehub-logo">
    <LogoIcon :name="name" :size="size" />
  </div>
</template>

<style scoped lang="scss">
.minehub-logo {
  font-weight: bold;
  font-size: 20px;

  :deep(canvas) {
    vertical-align: -9px;
  }
}
</style>
