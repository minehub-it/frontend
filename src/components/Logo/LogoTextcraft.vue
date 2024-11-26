<template>
  <nuxt-link class="logo" :to="props.to" :title="imageAlt">
    <div :id="`${props.name}-logo`" class="logo-image" />
    <!--
    <p v-text="props.description" />
    -->
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  to: Object,
  description: String,
  alt: {
    type: String,
    default: '',
  },
})

const imageAlt = computed(() => {
  if (props.alt) return props.alt

  return props.description
})
</script>

<style scoped lang="scss">
.logo {
  display: inline-block;
  text-align: center;
  user-select: none;

  .logo-image {
    background-size: auto 63px;
    height: 63px;
    margin-top: -2px;
    opacity: 0.8;
  }

  #crafting-logo {
    width: 250px;
    background-image: url('~assets/crafting/minesearch.png');
  }

  #serverlist-logo {
    width: 400px;
    background-image: url('/logo/serverlist.png');
  }

  p {
    margin: 0;
    font-size: 11px;
    color: #999;
  }
}
</style>
