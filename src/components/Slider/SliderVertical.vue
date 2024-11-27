<script setup lang="ts">
import {Mousewheel} from "swiper/modules";
</script>

<template>
  <swiper
      direction="vertical"
      :slide-per-view="1"
      mousewheel
      :modules="[Mousewheel]"
      class="minehub-slider-vertical fill-height"
      style="max-height: 100dvh;"
  >
    <slot />
  </swiper>
</template>