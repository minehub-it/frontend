<script setup lang="ts">
import {DiscordIcon, PatreonIcon} from "vue3-simple-icons";

const appStore = useAppStore()
</script>

<template>
  <v-app-bar
      color="transparent"
      :float="false" :extended="false"
      :height="88" flat
  >

    <v-app-bar-title class="px-2">
      <v-row>
        <v-col :cols="3" align-self="center">

          <v-breadcrumbs class="ml-1">
            <v-breadcrumbs-item
                class="cursor-pointer"
                @click="appStore.toggleNavigationDrawer"
            >
              <v-icon icon="mdi-menu" :size="32" />
            </v-breadcrumbs-item>
          </v-breadcrumbs>

        </v-col>
        <v-col :cols="6" class="text-center" align-self="center">

          <client-only>
            <Logo :key="$route.name" name="header" :size="36" />
          </client-only>

        </v-col>
        <v-col :cols="3" class="text-right" align-self="center">

          <v-breadcrumbs class="float-right mr-n3">
            <v-breadcrumbs-item href="/discord" target="_blank">
              <DiscordIcon class="minehub-icon--discord" style="width: 25px; height: 25px; margin-top: 5px;" />
            </v-breadcrumbs-item>
          </v-breadcrumbs>

        </v-col>
      </v-row>
    </v-app-bar-title>

  </v-app-bar>
</template>

<style lang="scss">
header.v-app-bar {
  transition: all 0.3s ease-in-out;
  background: rgba(var(--v-theme-background), 0.9) !important;
  backdrop-filter: blur(32px);
  box-shadow: none !important;
  z-index: 100 !important;

  .v-toolbar-title {
    width: 100vw;

    canvas {
      vertical-align: -9px;
    }
  }

  .v-breadcrumbs {
    &-item {
      font-size: 17px;

      a {
        padding: 12px 16px;
        text-decoration: none !important;
      }

      svg {
        vertical-align: -7px;

        &.minehub-icon {
          &--discord {
            width: 22px;
            height: 22px;
            vertical-align: -5px;
          }
          &--patreon {
            width: 17px;
            height: 17px;
            vertical-align: -2px;
          }
        }
      }
    }
  }
}
</style>