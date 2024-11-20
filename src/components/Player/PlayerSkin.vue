<template>
  <canvas id="skin_container"/>
</template>

<script setup lang="ts">
import {SkinViewer, WalkingAnimation} from 'skinview3d'

const props = withDefaults(defineProps<{
  username?: string
  width: number
  height: number
  speed?: number
}>(), {
  speed: 0.855
})

const skinSource = computed(() => {
  if (!props.username) {
    return '/skins/wumpus/classic.png'
  }

  return `https://minotar.net/skin/${props.username}`
})

onMounted(() => {
  let skinViewer = new SkinViewer({
    canvas: document.getElementById("skin_container"),
    width: 300,
    height: 400,
  })

  skinViewer.width = props.width
  skinViewer.height = props.height

  skinViewer.fov = 70
  skinViewer.zoom = 1

  skinViewer.loadSkin(skinSource.value)

  skinViewer.autoRotate = false

  skinViewer.animation = new WalkingAnimation()
  skinViewer.animation.speed = props.speed
})
</script>

<style scoped lang="scss">
canvas {
  pointer-events: none;
}
</style>