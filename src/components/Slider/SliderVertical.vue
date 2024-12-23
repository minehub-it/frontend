<script setup lang="ts">
import {Mousewheel} from "swiper/modules";
</script>

<template>
  <swiper-container
      direction="vertical"
      mousewheel allow-touch-move
      :modules="[Mousewheel]"
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