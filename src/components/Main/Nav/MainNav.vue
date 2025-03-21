<script setup lang="ts">
import {DiscordIcon, PatreonIcon} from "vue3-simple-icons";
import {useDisplay} from "vuetify";

const appStore = useAppStore()
const display = useDisplay()

onMounted(() => {
  appStore.navigationDrawer = display.smAndUp.value
})

function onNavContentClick() {
  if (display.mdAndUp.value) {
    return false
  }

  appStore.toggleNavigationDrawer()
}
</script>

<template>
  <v-navigation-drawer
      v-model="appStore.navigationDrawer"
      floating
      :mobile-breakpoint="960"
      :width="300"
  >
    <v-list class="mx-3" @click="onNavContentClick">

      <v-list-item class="mb-5">
        <nuxt-link class="d-inline-block" to="/">
          <Logo name="nav" :size="48"/>
        </nuxt-link>
      </v-list-item>

      <v-list-item rounded to="/">
        <template #prepend>
          <v-icon icon="mdi-home" :size="31" style="margin-left: 2px;"/>
        </template>
        Home
      </v-list-item>

      <v-list-item rounded to="/preferiti" class="hidden-sm-and-down">
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
          <v-icon icon="mdi-server" :size="30" style="margin-left: 2px;"/>
        </template>
        Servers
      </v-list-item>

      <v-list-item rounded v-bind="externalUrlProps(links.discord.lobby)">
        <template #prepend>
          <v-icon icon="mdi-controller" :size="30" style="margin-left: 2px;"/>
        </template>
        Giocatori
      </v-list-item>

      <v-list-item rounded v-bind="externalUrlProps(links.discord.server)">
        <template #prepend>
          <v-icon>
            <DiscordIcon/>
          </v-icon>
        </template>
        Discord
      </v-list-item>

      <v-list-item rounded v-bind="externalUrlProps(links.patreon)">
        <template #prepend>
          <v-icon>
            <PatreonIcon :size="25"/>
          </v-icon>
        </template>
        Patreon
      </v-list-item>

      <v-list-item rounded to="/about">
        <template #prepend>
          <v-icon>
            <v-icon icon="mdi-cube-outline" :size="31" style="margin-left: 2px;"/>
          </v-icon>
        </template>
        About
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.v-navigation-drawer {
  position: fixed !important;
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
  font-size: 20px;

  &-item {
    padding-top: 10px !important;
    padding-bottom: 10px !important;

    :deep(.v-list-item__prepend) {
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