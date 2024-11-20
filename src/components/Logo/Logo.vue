<template>
  <div class="minehub-logo">
    <LogoIcon name="logo" :size="size" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size: number
}>(), {
  size: 48
})
</script>

<style scoped lang="scss">
.minehub-logo {
  font-weight: bold;
  font-size: 20px;

  :deep(canvas) {
    vertical-align: -9px;
  }
}
</style>
