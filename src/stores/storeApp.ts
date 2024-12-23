export const useAppStore = defineStore('app', () => {
  const navigationDrawer = ref(false)

  function toggleNavigationDrawer() {
    navigationDrawer.value = !navigationDrawer.value
  }

  return {
    navigationDrawer,
    toggleNavigationDrawer,
  }
})