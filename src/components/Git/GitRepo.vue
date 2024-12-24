<script setup lang="ts">
import {GitHubIcon} from "vue3-simple-icons";

const props = defineProps<{
  title: string
  organization: string
  repository: string
  description: string
}>()

const href = `https://github.com/${props.organization}/${props.repository}`
</script>

<template>
  <v-card class="pa-5 mt-4" :href="href" target="_blank">
    <v-row>
      <v-col class="flex-grow-0">

        <GitHubIcon :size="32" class="mt-2 ml-1" color="#CCC"/>

      </v-col>
      <v-col class="flex-grow-1">

        <div>
          <b class="text-h6 text-white font-weight-bold" v-text="title"/>
        </div>
        <div class="mt-n1 mb-1 text-caption">
          <span class="text-grey-darken-1" v-text="`${organization} / `"/>
          <span class="text-grey" v-text="repository"/>
        </div>
        <p class="text-large" v-text="description"/>

      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss">
p {
  opacity: 0.4;
}
</style>