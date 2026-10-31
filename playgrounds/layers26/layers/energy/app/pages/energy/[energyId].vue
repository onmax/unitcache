<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState18()
useHead({ title: `Energy 1 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p1">
    <h1>Energy page 1 ({{ count }})</h1>
    <EnergyWidget172 title="EnergyWidget172" />
    <EnergyWidget207 title="EnergyWidget207" />
    <EnergyWidget104 title="EnergyWidget104" />
    <EnergyWidget119 title="EnergyWidget119" />
    <EnergyWidget214 title="EnergyWidget214" />
  </div>
</template>
