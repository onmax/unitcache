<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState13()
useHead({ title: `Energy 8 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p8">
    <h1>Energy page 8 ({{ count }})</h1>
    <EnergyWidget123 title="EnergyWidget123" />
    <EnergyWidget56 title="EnergyWidget56" />
    <EnergyWidget85 title="EnergyWidget85" />
  </div>
</template>
