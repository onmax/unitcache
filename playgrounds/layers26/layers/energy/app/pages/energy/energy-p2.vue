<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState15()
useHead({ title: `Energy 2 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p2">
    <h1>Energy page 2 ({{ count }})</h1>
    <EnergyWidget20 title="EnergyWidget20" />
    <EnergyWidget95 title="EnergyWidget95" />
    <EnergyWidget249 title="EnergyWidget249" />
  </div>
</template>
