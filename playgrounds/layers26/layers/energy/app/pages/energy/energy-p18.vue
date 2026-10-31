<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState3()
useHead({ title: `Energy 18 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p18">
    <h1>Energy page 18 ({{ count }})</h1>
    <EnergyWidget36 title="EnergyWidget36" />
    <EnergyWidget141 title="EnergyWidget141" />
    <EnergyWidget98 title="EnergyWidget98" />
    <EnergyWidget179 title="EnergyWidget179" />
    <EnergyWidget28 title="EnergyWidget28" />
  </div>
</template>
