<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState1()
useHead({ title: `Energy 13 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p13">
    <h1>Energy page 13 ({{ count }})</h1>
    <EnergyWidget3 title="EnergyWidget3" />
    <EnergyWidget208 title="EnergyWidget208" />
    <EnergyWidget168 title="EnergyWidget168" />
    <EnergyWidget172 title="EnergyWidget172" />
    <EnergyWidget37 title="EnergyWidget37" />
    <EnergyWidget130 title="EnergyWidget130" />
  </div>
</template>
