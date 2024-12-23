<script setup lang="ts">
definePageMeta({
  layout: 'slider'
})

useServerSeoMeta({
  title: 'Minecraft ITALIA - Community italiana di giocatori dal 2011',
  description: 'Prendi parte alla community italiana dedicata a Minecraft e scopri un mondo di opportunità trovando giocatori e partite in attualmente corso su Minecraft',
})
</script>

<template>
  <SliderVertical class="text-center fill-height" :slide-per-view="1">
    <swiper-slide>
      <SliderVerticalSlideContainer>
        <HomeHeroIntro />
      </SliderVerticalSlideContainer>
    </swiper-slide>
    <swiper-slide class="hidden-xs">
      <SliderVerticalSlideContainer>
        <HomeHeroSponsor />
      </SliderVerticalSlideContainer>
    </swiper-slide>
  </SliderVertical>
</template>