<script setup lang="ts">
const props = defineProps<{ points: number[] }>()
const max = computed(() => Math.max(1, ...props.points))
</script>

<template>
  <svg viewBox="0 0 100 20" class="chart"><rect v-for="(p, i) in points" :key="i" :x="i * 4" :y="20 - p / max * 20" width="3" :height="p / max * 20" /></svg>
</template>

<style scoped>
.chart { width: 100%; height: 40px; fill: currentColor; }
</style>
