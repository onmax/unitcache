<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState24()
useHead({ title: `Energy 10 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p10">
    <h1>Energy page 10 ({{ count }})</h1>
    <EnergyWidget102 title="EnergyWidget102" />
    <EnergyWidget45 title="EnergyWidget45" />
    <EnergyWidget56 title="EnergyWidget56" />
    <EnergyWidget103 title="EnergyWidget103" />
  </div>
</template>
