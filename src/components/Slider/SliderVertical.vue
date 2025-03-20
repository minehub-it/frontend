<template>
  <swiper-container
      direction="vertical"
      slides-per-view="auto"
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
}
</style>