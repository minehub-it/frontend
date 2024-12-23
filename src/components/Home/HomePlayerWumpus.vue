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
        class="minehub-home__player-wumpus d-inline-block"
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
.minehub-home__player-wumpus {
  @media(max-width: 479px) {
    transform: scale(0.8);
  }
}
</style>