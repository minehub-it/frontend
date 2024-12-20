<template>
  <SliderVertical class="text-center" :slide-per-view="1">
    <swiper-slide>
      <SliderVerticalSlideContainer>
        <HomeHeroIntro />
      </SliderVerticalSlideContainer>
    </swiper-slide>
    <swiper-slide>
      <SliderVerticalSlideContainer>
        <HomeHeroSponsor />
      </SliderVerticalSlideContainer>
    </swiper-slide>
  </SliderVertical>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Minecraft ITALIA - Community italiana di giocatori dal 2011',
  description: 'Prendi parte alla community italiana dedicata a Minecraft e scopri un mondo di opportunità trovando giocatori e partite in attualmente corso su Minecraft',
})
</script>