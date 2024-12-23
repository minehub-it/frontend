<template>
  <div class="minehub-block-home px-6 mt-n7 mt-md-0">
    <div class="minehub-skin-mobile">
      <div class="minehub-skin-mobile__inner">
        <HomePlayerWumpus
            class="mb-15"
        />
      </div>
      <v-divider class="mx-auto"/>
    </div>

    <div class="mt-10 mt-md-16">

      <div class="text-h3">
        Scopri nuove <span>avventure</span>
      </div>

      <p class="text-large pt-10">
        Prendi parte alla nostra community
        <br class="hidden-sm-and-up"/>
        e scopri un mondo di opportunità
        <br />
        trovando giocatori e partite in corso su
        <br class="hidden-sm-and-up"/>
        Minecraft: Java e Bedrock Edition!
        <br/>
        Il nostro storico forum si è spostato
        <br class="hidden-sm-and-up"/>
        nel 2020 e si trova ora su Discord
      </p>

      <div class="mt-8 hidden-sm-and-down">
        <v-sheet :max-width="520" class="mx-auto" color="transparent">
          <v-row no-gutters>
            <v-col align-self="center" :cols="12" :sm="7">

              <ButtonDiscordJoin />

            </v-col>
            <v-col align-self="center" :cols="12" :sm="5" class="pt-2 pt-sm-0">

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
  </div>
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

      @media(max-width: 479px) {
        height: 160px;
      }
    }

    .v-divider {
      max-width: 300px;
      opacity: 0.05;
    }
  }
}
</style>