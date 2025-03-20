export const useBannerFeaturedStore = defineStore('banner/featured', () => {
  const bannerFeatured: Ref<any[]> = ref([])

  async function fetchBannerFeatured() {
    if (bannerFeatured.value.length > 0) {
      return true
    }

    return apiCommon.getBannerFeatured()
      .then(banners => {

        bannerFeatured.value = banners

      })
      .catch(e => {
        console.log(e)
      })
  }

  return {
    bannerFeatured,
    fetchBannerFeatured,
  }
})