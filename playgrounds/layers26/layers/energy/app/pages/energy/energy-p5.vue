<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState22()
useHead({ title: `Energy 5 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p5">
    <h1>Energy page 5 ({{ count }})</h1>
    <EnergyWidget247 title="EnergyWidget247" />
    <EnergyWidget171 title="EnergyWidget171" />
    <EnergyWidget110 title="EnergyWidget110" />
    <EnergyWidget21 title="EnergyWidget21" />
    <EnergyWidget3 title="EnergyWidget3" />
  </div>
</template>
