<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState1()
useHead({ title: `Energy 4 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p4">
    <h1>Energy page 4 ({{ count }})</h1>
    <EnergyWidget201 title="EnergyWidget201" />
    <EnergyWidget107 title="EnergyWidget107" />
    <EnergyWidget116 title="EnergyWidget116" />
    <EnergyWidget41 title="EnergyWidget41" />
    <EnergyWidget87 title="EnergyWidget87" />
    <EnergyWidget191 title="EnergyWidget191" />
  </div>
</template>
