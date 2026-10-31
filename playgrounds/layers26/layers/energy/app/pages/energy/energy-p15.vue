<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState28()
useHead({ title: `Energy 15 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p15">
    <h1>Energy page 15 ({{ count }})</h1>
    <EnergyWidget129 title="EnergyWidget129" />
    <EnergyWidget0 title="EnergyWidget0" />
    <EnergyWidget126 title="EnergyWidget126" />
    <EnergyWidget102 title="EnergyWidget102" />
    <EnergyWidget131 title="EnergyWidget131" />
    <EnergyWidget27 title="EnergyWidget27" />
  </div>
</template>
