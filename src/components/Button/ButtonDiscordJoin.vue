<script setup lang="ts">
import {DiscordIcon} from "vue3-simple-icons";
</script>

<template>
  <v-btn class="bg-discord text-white px-4" flat size="large" min-height="56px">
    Collegati a Discord

    <v-divider vertical class="mx-4" style="height: 56px;" />

    <DiscordIcon width="32px" fill="white" />
    <v-tooltip activator="parent" :location="$vuetify.display.smAndDown ? 'bottom' : 'end'">
      Unisciti ad oltre 30.000 giocatori
    </v-tooltip>

  </v-btn>
</template>

<style scoped lang="scss">

</style>