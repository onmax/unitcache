<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState26()
useHead({ title: `Energy 16 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p16">
    <h1>Energy page 16 ({{ count }})</h1>
    <EnergyWidget144 title="EnergyWidget144" />
    <EnergyWidget244 title="EnergyWidget244" />
    <EnergyWidget6 title="EnergyWidget6" />
  </div>
</template>
