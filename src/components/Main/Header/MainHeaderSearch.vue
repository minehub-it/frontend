<script setup lang="ts">
withDefaults(defineProps<{
  name: string
}>(), {
  name: 'default'
})
</script>

<template>
  <div :id="`${name}-main-header`" class="main-header">
    <!-- header top -->
    <v-row class="mt-6 mb-3">
      <v-col :cols="12" :lg="7" class="py-0" align-self="center">
        <slot name="logo"/>
      </v-col>
      <v-col :cols="12" :lg="4" class="py-0 offset-sm-1 hidden-md-and-down">
        <div class="hidden-sm-and-up mt-3"/>
        <div class="main-header-search">
          <!-- header autocomplete -->
          <slot name="search"/>
        </div>
      </v-col>
    </v-row>

    <!-- header categories -->
    <div class="main-header-categories">
      <!-- header categories / btn server-list -->
      <v-card class="hidden-sm-and-down px-1 pt-5 pb-3 mb-6">
        <div class="main-header-categories-container">
          <slot name="categoriesWide"/>
        </div>
      </v-card>

      <!-- header categories / dropdown select -->
      <slot name="categoriesSelect"/>
    </div>
  </div>
</template>

<style lang="scss">
// non scoped, perchè modifica autocomplete e stili altrimenti non sostituibili
.main-header {
  // altezza fissa del primo v-layout, per via del logo textcraft che straborda
  > div.layout:first-child {
    @media (min-width: 559px) {
      height: 48px;
    }
  }

  .logo {
    margin-right: 24px;

    @media(max-width: 1279px) {
      display: block;

      .logo-image {
        margin: 0 auto;
      }
    }
  }

  .main-header-search {
    // posizione item selezionato nell'autocomplete, minor improvement
    .v-select__selections {
      > span {
        margin-left: -4px;
      }
    }

    .v-select--is-menu-active {
      .v-icon {
        transform: none !important;
      }
    }

    // miglioramenti su border-radius da mobile
    @media (max-width: 599px) {
      .v-input__slot {
        border-radius: 2px 2px 0 0 !important;
      }
    }
  }

  .main-header-categories {
    // pulsanti centrati
    text-align: center;

    // margine sistemato da lista categorie ad elementi presenti sotto
    .v-text-field__details {
      display: none;
    }

    // larghezza contenitore categorie
    .main-header-categories-container {
      margin: 0 auto;
      max-width: 100%;

      // guadagna spazio
      .v-btn {
        text-transform: initial;
        min-width: 72px;
        padding: 0 15px;
      }
    }

    // margine tra header e categorie
    @media (min-width: 600px) {
      margin-top: 16px !important;
    }

    // miglioramenti su border-radius da mobile
    @media (max-width: 599px) {
      .v-input__slot {
        border-radius: 0 0 2px 2px !important;
      }
    }
  }
}

// altrimenti va sopra la main-toolbar
.v-autocomplete__content.v-menu__content {
  z-index: 3 !important;
}
</style>
