<template>
  <Block class="minehub-block-home-hero">
    <v-container :width="700">
      <div>
        <div class="text-h3">
          Ottieni più visibilità <br/>
          tramite <span>Patreon</span>
        </div>

        <v-row class="mt-16">
          <v-col>

            <p class="text-large">
              Chi non vuole stare in cima e in vista? Ma se lo fai
              per promuovere qualcosa o per far vedere la tua nuova propic
              allora hai un motivo in più per volerlo
            </p>

            <v-btn
                class="mt-5" size="large" flat rounded
                :href="patreonCheckoutLink(6990444)" target="_blank"
            >
              Visibilità over 9000
            </v-btn>

          </v-col>
          <v-col>

            <p class="text-large">
              Ora oltre a
              <a href="https://discord.com/channels/522487914303586315/1089376973945581578" target="_blank" ref="nofollow">#promo-server</a> puoi promuovere il tuo server
              sul sito nella <nuxt-link to="/lista-server-java-edition">lista server</nuxt-link>
              col piano Premium o nella sezione <nuxt-link to="/featured">Featured</nuxt-link> (aziende e brand)
            </p>

            <v-btn
                class="mt-5" size="large" flat rounded
                :href="patreonCheckoutLink(6990444)" target="_blank"
            >
              Per chi fa sul serio
            </v-btn>

          </v-col>

        </v-row>

        <v-row class="mt-8" v-if="$vuetify.display.height > 780">
          <v-col>

            <p class="text-large">
              Collega l'account Discord <a href="https://patreon.com/settings/apps" target="_blank" ref="nofollow">a Patreon</a> e ottieni
              instant il nick d'oro o diamante in base al tipo di
              sottoscrizione VIP:
              fatti notare e sblocca GIF + reactions
            </p>

            <v-btn
                class="mt-5" size="large" flat rounded
                :href="patreonCheckoutLink(6990444)" target="_blank"
            >
              Per tutti i gigachad
            </v-btn>

          </v-col>
          <v-col>

            <p class="text-large">
              Credi che quello che stiamo offrendo non sia abbastanza
              per permettere al tuo progetto di essere conosciuto e
              raggiungere il pubblico che cerchi?
            </p>

            <v-btn
                class="mt-5" size="large" flat rounded
                :href="patreonCheckoutLink(6990444)" target="_blank"
            >
              Diventa partner
            </v-btn>

          </v-col>

        </v-row>

        <!--
        <div class="mt-12 pt-12">

        </div>
        -->
      </div>
    </v-container>
  </Block>
</template>

<style scoped lang="scss">
.minehub-block-home-hero {
  a {
    opacity: 0.55;
  }
}
</style>