<template>
  <swiper-container
      direction="vertical"
      allow-touch-move mousewheel-force-to-axis="true"
      class="minehub-slider-vertical"
  >
    <slot />
  </swiper-container>
</template>

<style scoped lang="scss">
.minehub-slider-vertical {
  max-width: 1200px;
  margin: 0 auto;
  height: 100dvh;

  @media(max-width: 959px) {
    height: calc(100dvh - 100px) !important;
  }
}
</style>