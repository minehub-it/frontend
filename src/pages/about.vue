<script setup lang="ts">
import {DiscordIcon, GitHubIcon, PatreonIcon} from "vue3-simple-icons";

const gitFeedStore = useGitFeedStore()

const commits = computed(() => gitFeedStore.commits)
const isLoading = computed(() => gitFeedStore.isLoading)
const error = computed(() => gitFeedStore.error)

await gitFeedStore.fetchCommits()

useServerSeoMeta({
  title: 'Riguardo a - Minecraft ITALIA',
  description: 'Informazioni sul sistema impiegato dalla community di Minecraft ITALIA, gli ultimi aggiornamenti e le modifiche apportate al web client di MineHub e altro',
})
</script>

<template>
  <v-row class="mt-1 mb-4">
    <v-col>

      <div class="position-sticky">
        <v-card class="mt-3 pa-6">
          <p class="text-large mb-4">
            Minecraft ITALIA è basato sulla piattaforma <a href="https://github.com/minehub-it">MineHub</a>,
            un'applicazione web rivisitata di recente e messa online.
          </p>

          <p class="text-large">
            Il codice sorgente della piattaforma è pubblicamente disponibile per trasparenza e condivisione
            ma non viene fornito sotto una licenza open source specifica, quindi si invita a prendere parte
            alla community per scoprire limiti, modalità di utilizzo, o contribuire al suo sviluppo.
          </p>
        </v-card>

        <GitRepository
            title="MineHub Web Client"
            organization="minehub-it"
            repository="frontend"
            description="Client principale basato su Nuxt 3"
            class="mt-4"
        />

        <GitRepository
            title="MineHub – Server Layer"
            organization="minehub-it"
            repository="server-layer"
            description="Nuxt Layer dedicato alla lista server"
            class="mt-4"
        />

        <GitRepository
            title="MineHub – Server List"
            organization="minehub-it"
            repository="server-list"
            description="Lista dei server e delle categorie"
            class="mt-4"
        />

        <v-breadcrumbs class="mx-auto">
          <v-breadcrumbs-item class="mx-1" v-bind="externalUrlProps(links.github)">
            <GitHubIcon :size="22"/>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item class="mx-1" v-bind="externalUrlProps(links.discord.server)">
            <DiscordIcon :size="28"/>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item class="mx-1" v-bind="externalUrlProps(links.patreon)">
            <PatreonIcon :size="21"/>
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </div>

    </v-col>
    <v-col>

      <v-alert
          v-if="error" type="error"
          dense :text="error"
      />

      <v-progress-linear
          v-if="isLoading"
          indeterminate
          color="primary"
          class="my-4"
      />

      <GitFeedItem
          v-for="commit in commits"
          :commit="commit"
      />

    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.position-sticky {
  top: 28px;
}

.v-breadcrumbs {
  width: min-content;

  &-item {
    opacity: 0.25;

    &:hover {
      opacity: 0.5;
    }
  }
}

.v-divider {
  opacity: 0.05;
}
</style>