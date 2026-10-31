<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState17()
useHead({ title: `Energy 6 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p6">
    <h1>Energy page 6 ({{ count }})</h1>
    <EnergyWidget205 title="EnergyWidget205" />
    <EnergyWidget103 title="EnergyWidget103" />
    <EnergyWidget70 title="EnergyWidget70" />
    <EnergyWidget79 title="EnergyWidget79" />
    <EnergyWidget54 title="EnergyWidget54" />
    <EnergyWidget149 title="EnergyWidget149" />
  </div>
</template>
