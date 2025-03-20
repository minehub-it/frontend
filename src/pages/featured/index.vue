<script setup lang="ts">
const bannerFeaturedStore = useBannerFeaturedStore()

definePageMeta({
  layout: 'slider'
})

useServerSeoMeta({
  title: 'Featured - Minecraft ITALIA',
})
</script>

<template>
  <div class="text-center pt-10 pt-md-16 pb-9">
    <h3 class="text-h3">
      Che c'è di<br class="hidden-sm-and-up" /> <span>nuovo</span> oggi?
    </h3>
    <p class="text-large mt-4">
      Featured su Minecraft ITALIA
    </p>
  </div>
  <SliderVertical
      :space-between="24"
      class="px-6 py-md-6"
  >
    <swiper-slide
        v-for="banner of bannerFeaturedStore.bannerFeatured"
    >
      <BannerWideFeatured
          :href="banner.link"
          :image="banner.image"
      />
    </swiper-slide>
    <swiper-slide>
      <BannerWideFeaturedAdd />
    </swiper-slide>
  </SliderVertical>
</template>

<style scoped lang="scss">
swiper-slide {
  height: min-content;
}
</style>