<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core'

const {commit} = defineProps<{
  commit: any
}>()

const timeAgo = useTimeAgo(
    new Date(commit.commit.committer.date)
)

const linkProps = {
  href: commit.html_url,
  target: "_blank",
}

const authorProps = {
  href: `https://github.com/${commit.author.login}`,
  target: "_blank",
}
</script>

<template>
  <v-card
      :key="commit.sha"
      class="mt-3 pa-3"
      v-bind="linkProps"
  >
    <v-card-item>
      <template #prepend>

        <a v-bind="authorProps">
          <v-avatar
              :size="36" class="mr-3"
              :to="`https://github.com/${commit.commit.author.name}`"
          >
            <v-img
                :src="commit.author?.avatar_url"
            />
          </v-avatar>
        </a>

      </template>
      <template #default>

        <v-list-item-title
            v-text="commit.commit.message"
        />
        <v-list-item-subtitle>
          <a
              v-bind="authorProps"
              v-text="commit.commit.author.name"
          /> •
          <span v-text="timeAgo" />
        </v-list-item-subtitle>

      </template>
      <template #append>

        <v-list-item-action>
          <v-chip
              label text-color="white"
              v-text="commit.sha.slice(0, 7)"
          />
        </v-list-item-action>

      </template>
    </v-card-item>
  </v-card>
</template>

<style scoped lang="scss">
.v-chip {
  background: rgba(255, 255, 255, 0.05);
}
</style>