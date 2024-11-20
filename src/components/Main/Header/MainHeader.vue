<script setup lang="ts">
import {DiscordIcon, PatreonIcon} from "vue3-simple-icons";

const appConfig = useAppConfig()
</script>

<template>
  <v-app-bar
      class="position-fixed" color="transparent"
      :float="false" :extended="false"
      :height="88"
      flat
  >

    <v-app-bar-title>
      <v-breadcrumbs class="d-inline-block py-0 mx-auto">
        <v-breadcrumbs-item>
          <nuxt-link to="/">
            <Logo :size="32" />
          </nuxt-link>
        </v-breadcrumbs-item>
        <v-breadcrumbs-item to="/lista-server-java-edition">
          Servers Java
        </v-breadcrumbs-item>
        <v-breadcrumbs-item to="/lista-server-bedrock-edition">
          Servers Bedrock
        </v-breadcrumbs-item>
        <v-breadcrumbs-item href="/discord" target="_blank">
          <DiscordIcon class="minehub-icon--discord" />
        </v-breadcrumbs-item>
        <v-breadcrumbs-item :href="appConfig.links.patreon" target="_blank">
          <PatreonIcon class="minehub-icon--patreon" />
        </v-breadcrumbs-item>
      </v-breadcrumbs>
    </v-app-bar-title>

  </v-app-bar>
</template>

<style lang="scss">
header.v-app-bar {
  transition: all 0.3s ease-in-out;
  box-shadow: none !important;

  .v-toolbar-title {
    position: fixed;
    top: 16px !important;
    left: 50% !important;
    transform: translateX(-50%);
    max-width: 720px;
    backdrop-filter: blur(22px);
    background: rgba(255, 255, 255, 0.33);
    border-radius: 128px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);

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