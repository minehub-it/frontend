<script setup lang="ts">
import {DiscordIcon, PatreonIcon} from "vue3-simple-icons";
import {links} from "@/const";
</script>

<template>
  <v-navigation-drawer
      absolute permanent
      :width="300"
  >
    <v-list class="mx-3">

      <v-list-item class="mb-5">
        <nuxt-link to="/">
          <Logo :size="48"/>
        </nuxt-link>
      </v-list-item>

      <v-list-item rounded to="/">
        <template #prepend>
          <v-icon icon="mdi-home"/>
        </template>
        Home
      </v-list-item>

      <v-list-item rounded to="/preferiti">
        <template #prepend>
          <v-icon icon="mdi-star"/>
        </template>
        Preferiti
      </v-list-item>

      <v-list-item rounded to="/featured">
        <template #prepend>
          <v-icon icon="mdi-shimmer"/>
        </template>
        Featured
      </v-list-item>

      <v-list-item rounded to="/lista-server-java-edition">
        <template #prepend>
          <v-icon icon="mdi-server"/>
        </template>
        Servers
      </v-list-item>

      <v-list-item rounded :href="links.discord + '/channels/522487914303586315/1068926288200478810'" target="_blank">
        <template #prepend>
          <v-icon icon="mdi-controller"/>
        </template>
        Giocatori
      </v-list-item>

      <v-list-item rounded :href="links.discord" target="_blank">
        <template #prepend>
          <v-icon>
            <DiscordIcon/>
          </v-icon>
        </template>
        Discord
      </v-list-item>

      <v-list-item rounded :href="links.patreon" target="_blank">
        <template #prepend>
          <v-icon>
            <PatreonIcon/>
          </v-icon>
        </template>
        Patreon
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.v-navigation-drawer {
  border-color: rgba(0, 0, 0, 0.1);

  :deep(.v-navigation-drawer__content) {
    display: grid;
    align-items: center;
  }
}

.v-list {
  display: inline-block;
  font-size: 24px;

  &-item {
    padding-top: 12px !important;
    padding-bottom: 12px !important;

    &--active {
      font-weight: bold;

      &:not(:hover) {
        :deep(.v-list-item__overlay) {
          background: none !important;
        }
      }
    }
  }

  .v-icon {
    vertical-align: -4px;
  }
}
</style>