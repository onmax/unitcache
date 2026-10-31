<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState8()
useHead({ title: `Energy 11 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p11">
    <h1>Energy page 11 ({{ count }})</h1>
    <EnergyWidget143 title="EnergyWidget143" />
    <EnergyWidget83 title="EnergyWidget83" />
    <EnergyWidget16 title="EnergyWidget16" />
    <EnergyWidget126 title="EnergyWidget126" />
    <EnergyWidget58 title="EnergyWidget58" />
  </div>
</template>
