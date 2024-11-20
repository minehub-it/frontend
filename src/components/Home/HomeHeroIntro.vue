<script setup lang="ts">

</script>

<template>
  <Block class="minehub-block-home">
    <v-container>
      <v-row>
        <v-col :cols="12" :lg="9" align-self="center">

          <div class="minehub-skin-mobile hidden-lg-and-up">
            <div class="minehub-skin-mobile__inner">
              <HomePlayerWumpus
                  v-if="$vuetify.display.mdAndDown"
                  class="hidden-lg-and-up mb-15"
              />
            </div>
            <v-divider class="mx-auto"/>
          </div>

          <div class="mt-16 mt-lg-0">

            <div class="text-h3">
              Scopri nuove <span>avventure</span>
            </div>

            <p class="text-large pt-10">
              Prendi parte alla nostra community e scopri un mondo di opportunità
              <br class="hidden-sm-and-down"/>
              trovando giocatori e partite in corso su Minecraft: Java e Bedrock Edition!
              <br class="hidden-sm-and-down"/>
              Il nostro storico forum si è spostato nel 2020 e si trova ora su Discord
            </p>

            <div class="mt-8">
              <v-sheet :max-width="480" class="mx-auto">
                <v-row no-gutters>
                  <v-col align-self="center" :cols="12" :sm="9">

                    <ButtonDiscordJoin />

                  </v-col>
                  <v-col align-self="center" :cols="12" :sm="3" class="pt-2 pt-sm-0">

                    <div class="minehub-subscriptions">

                      <ButtonPatreonTier
                          :id="7078666"
                          title="Promuovi il tuo server"
                      >
                        <template v-slot:icon>
                          <client-only>
                            <LogoIcon
                                :size="20" name="patreon"
                                style="margin-top: 1px;"
                            />
                          </client-only>
                        </template>
                      </ButtonPatreonTier>

                      <ButtonPatreonTier
                          :id="6990444"
                          title="VIP Gold"
                      >
                        <template v-slot:icon>
                          <v-img
                              width="16px" height="16px"
                              src="https://cdn.discordapp.com/emojis/796156431790243861.webp?size=96&quality=lossless"
                          />
                        </template>
                      </ButtonPatreonTier>

                      <ButtonPatreonTier
                          :id="7295814"
                          title="VIP Diamond"
                      >
                        <template v-slot:icon>
                          <v-img
                              width="16px" height="16px"
                              src="https://cdn.discordapp.com/emojis/796156520026603572.webp?size=96&quality=lossless"
                          />
                        </template>
                      </ButtonPatreonTier>

                    </div>

                  </v-col>
                </v-row>
              </v-sheet>

            </div>

          </div>
        </v-col>
        <v-col class="flex-grow-0 text-left">
          <HomePlayerWumpus
              v-if="$vuetify.display.lgAndUp"
          />
        </v-col>
      </v-row>
    </v-container>
  </Block>
</template>

<style scoped lang="scss">
.minehub-subscriptions {
  display: inline-block;

  :deep(.v-btn) {
    transition: all 0.25s ease-in-out;
    filter: grayscale(1);
    opacity: 0.5;

    .v-btn__overlay {
      display: none;
    }

    &:first-child {
      opacity: 0.2;
    }

    &:last-child {
      opacity: 0.28;
    }

    &:hover {
      filter: none;
      opacity: 1;
    }
  }
}

.minehub-block-home {
  min-height: calc(100vh - var(--v-layout-top) - var(--v-layout-top)) !important;

  .v-btn {
    svg {
      pointer-events: none;
    }
  }

  .minehub-skin-mobile {
    &__inner {
      position: relative;
      overflow: hidden;
      height: 180px;
    }

    .v-divider {
      max-width: 300px;
      opacity: 0.05;
    }
  }
}
</style>