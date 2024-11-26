<script setup lang="ts">
const playerStore = usePlayerStore()

function onPlayerSkinClick() {
  const playerName = window.prompt("Qual'è il tuo nome su Minecraft?")

  if (playerName) {
    playerStore.setPlayerName(playerName)
  }
}
</script>

<template>
  <client-only>
    <div
        class="d-inline-block"
        @click="onPlayerSkinClick"
    >
      <PlayerSkin
          :width="200" :height="300"
          :username="playerStore.name"
          :key="playerStore.name"
      />
    </div>
  </client-only>
</template>

<style scoped lang="scss">

</style>