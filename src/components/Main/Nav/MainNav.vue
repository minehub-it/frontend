<script setup lang="ts">
import {DiscordIcon, PatreonIcon} from "vue3-simple-icons";
</script>

<template>
  <v-navigation-drawer
      absolute permanent
      :width="300"
  >
    <v-list class="mx-3">

      <v-list-item class="mb-5">
        <nuxt-link class="d-inline-block" to="/">
          <Logo :size="48"/>
        </nuxt-link>
      </v-list-item>

      <v-list-item rounded to="/">
        <template #prepend>
          <v-icon icon="mdi-home" :size="31" style="margin-left: 2px;"/>
        </template>
        Home
      </v-list-item>

      <v-list-item rounded to="/preferiti">
        <template #prepend>
          <v-icon icon="mdi-star" :size="32" style="margin-left: 2px;"/>
        </template>
        Preferiti
      </v-list-item>

      <v-list-item rounded to="/featured">
        <template #prepend>
          <v-icon icon="mdi-shimmer" :size="33" style="margin-left: 2px;"/>
        </template>
        Featured
      </v-list-item>

      <v-list-item
          rounded
          to="/lista-server-java-edition"
          :active="$route.name.startsWith('lista-server-java-edition')"
      >
        <template #prepend>
          <v-icon icon="mdi-server" :size="32" style="margin-left: 2px;"/>
        </template>
        Servers
      </v-list-item>

      <v-list-item rounded :href="links.discord.lobby" target="_blank">
        <template #prepend>
          <v-icon icon="mdi-controller" :size="30" style="margin-left: 2px;"/>
        </template>
        Giocatori
      </v-list-item>

      <v-list-item rounded :href="links.discord.server" target="_blank">
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
            <PatreonIcon :width="26" :height="26"/>
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

    /*
    &:before {
      position: absolute;
      content: '';
      background: red;
      top: 0;
      left: 33px;
      bottom: 0;
      width: 25px;
    }
     */
  }
}

.v-list {
  display: inline-block;
  font-size: 24px;

  &-item {
    padding-top: 12px !important;
    padding-bottom: 12px !important;

    &__prepend {
      min-width: 70px;
    }

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