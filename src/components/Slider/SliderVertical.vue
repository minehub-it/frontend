<script setup lang="ts">
import {Mousewheel} from "swiper/modules";
</script>

<template>
  <swiper-container
      direction="vertical"
      mousewheel allow-touch-move
      :modules="[Mousewheel]"
      class="minehub-slider-vertical fill-height"
  >
    <slot />
  </swiper-container>
</template>