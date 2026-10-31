<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState6()
useHead({ title: `Energy 0 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p0">
    <h1>Energy page 0 ({{ count }})</h1>
    <EnergyWidget243 title="EnergyWidget243" />
    <EnergyWidget89 title="EnergyWidget89" />
    <EnergyWidget215 title="EnergyWidget215" />
    <EnergyWidget110 title="EnergyWidget110" />
    <EnergyWidget156 title="EnergyWidget156" />
    <EnergyWidget155 title="EnergyWidget155" />
  </div>
</template>
