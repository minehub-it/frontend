<template>
  <canvas class="minehub-icon" :id="name" :width="size" :height="size" />
</template>

<script setup lang="ts">
const { size, name } = defineProps<{
  size: number
  name: string
}>()

const dimension = !import.meta.env.SSR ? new window.obelisk.CubeDimension(size/2, size/2, size/2) : null

let pixelView: any = null
let cube: any = null
let cubeColor: any = null

onMounted(() => {
  const canvas = document.getElementById(name)

  // create pixel view container in point
  const point = new window.obelisk.Point(size/2, size/2)
  pixelView = new window.obelisk.PixelView(canvas, point)

  // create dimension instance
  // create color instance
  cubeColor = new window.obelisk.CubeColor(
    0xffffff,
    0x5d4738,
    0x5d4738,
    0x4b3a2e,
    0x369260
  )

  // create cube primitive
  cube = new window.obelisk.Cube(dimension, cubeColor)
  // create cube primitive without border
  //var cube = new this.window.obelisk.Cube(dimension, color, false);

  // render primitive to view
  pixelView.renderObject(cube)
})
</script>

<style scoped lang="scss">
#minehub-icon {
  pointer-events: none;
}
</style>
