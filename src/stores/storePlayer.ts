export const usePlayerStore = defineStore('player', () => {
  const name = ref('')

  function setPlayerName(value: string) {
    name.value = value
  }

  return {
    name,
    setPlayerName,
  }
}, {
  persist: piniaPluginPersistedstate.cookies()
})