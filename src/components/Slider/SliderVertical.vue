<script setup lang="ts">
</script>

<template>
  <swiper
      direction="vertical"
      :slide-per-view="1"
      class="minehub-slider-vertical fill-height"
      style="max-height: 100dvh;"
  >
    <slot />
  </swiper>
</template>