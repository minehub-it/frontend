<template>
  <v-layout>

    <MainNav />

    <v-main width="100%" max-height="100dvh" class="overflow-y-scroll scrollbar-invisible">
      <v-container :width="1200" max-width="100%" class="px-5 py-0">
        <NuxtPage/>
      </v-container>
    </v-main>

  </v-layout>
</template>