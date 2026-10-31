<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState11()
useHead({ title: `Energy 9 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p9">
    <h1>Energy page 9 ({{ count }})</h1>
    <EnergyWidget61 title="EnergyWidget61" />
    <EnergyWidget100 title="EnergyWidget100" />
    <EnergyWidget54 title="EnergyWidget54" />
  </div>
</template>
