<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState13()
useHead({ title: `Energy 7 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p7">
    <h1>Energy page 7 ({{ count }})</h1>
    <EnergyWidget211 title="EnergyWidget211" />
    <EnergyWidget128 title="EnergyWidget128" />
    <EnergyWidget205 title="EnergyWidget205" />
    <EnergyWidget122 title="EnergyWidget122" />
    <EnergyWidget77 title="EnergyWidget77" />
    <EnergyWidget188 title="EnergyWidget188" />
  </div>
</template>
