<script setup lang="ts">
</script>

<template>
  <v-footer height="auto" class="px-0 py-2 mb-5 text-center">
    <v-container grid-list-md class="pa-0 px-1">
      <v-card-text>
        <p class="ma-0 text-center">
          &copy; {{ new Date().getFullYear() }} MineHub —
          <a :href="links.gameassist.android" target="_blank">GameAssist</a>
        </p>
      </v-card-text>
    </v-container>
  </v-footer>
</template>

<style scoped lang="scss">
.v-footer {
  opacity: 0.25;
  background: none;
  user-select: none;

  p {
    font-size: 16px;

    &:not(:last-child) {
      margin-bottom: 0;
    }

    a {
      text-decoration: none;
    }
  }

  &.v-theme--dark {
    sup {
      opacity: 0.4;
    }
  }
  &.v-theme--light {
    sup {
      opacity: 0.6;
    }
    a, p {
      color: #5f5f5f;
    }
  }
}
</style>
