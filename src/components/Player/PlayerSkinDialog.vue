<script setup lang="ts">
defineProps<{
  username: string
}>()
</script>

<template>
  <v-dialog class="minehub-player-skin-dialog" :width="380">
    <v-card>
      <v-card-text>
        <div class="minehub-player-skin-dialog__inner">
          <PlayerSkin class="minehub-player-skin-dialog__skin" :username="username" />
        </div>
      </v-card-text>

      <v-divider style="margin-top: -11px;" />

      <div class="text-center pt-5 pb-2">
        <div class="text-h4" :title="username" />
      </div>
    </v-card>
  </v-dialog>
</template>

<style lang="scss">
.minehub-player-skin-dialog {
  &__inner {
    overflow: hidden;
    height: 255px;
  }
  &__skin {
    margin: -176px 0 0 -130px;
  }
}
</style>