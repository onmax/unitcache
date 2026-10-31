<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState7()
useHead({ title: `Energy 3 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p3">
    <h1>Energy page 3 ({{ count }})</h1>
    <EnergyWidget165 title="EnergyWidget165" />
    <EnergyWidget24 title="EnergyWidget24" />
    <EnergyWidget29 title="EnergyWidget29" />
    <EnergyWidget107 title="EnergyWidget107" />
    <EnergyWidget248 title="EnergyWidget248" />
    <EnergyWidget128 title="EnergyWidget128" />
  </div>
</template>
