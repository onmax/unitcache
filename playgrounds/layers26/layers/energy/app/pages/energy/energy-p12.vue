<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState22()
useHead({ title: `Energy 12 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p12">
    <h1>Energy page 12 ({{ count }})</h1>
    <EnergyWidget152 title="EnergyWidget152" />
    <EnergyWidget74 title="EnergyWidget74" />
    <EnergyWidget181 title="EnergyWidget181" />
    <EnergyWidget236 title="EnergyWidget236" />
    <EnergyWidget27 title="EnergyWidget27" />
    <EnergyWidget106 title="EnergyWidget106" />
  </div>
</template>
