<template>
  <div class="minehub-block">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.minehub-block {
  display: grid;
  align-items: center;
  min-height: calc(100vh - var(--v-layout-top)) !important;
  padding: 100px 32px;

  @media(max-width: 1000px) {
    :deep(p) {
      font-size: 18px;
    }
  }
}
</style>