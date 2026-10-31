<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState7()
useHead({ title: `Energy 19 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p19">
    <h1>Energy page 19 ({{ count }})</h1>
    <EnergyWidget176 title="EnergyWidget176" />
    <EnergyWidget136 title="EnergyWidget136" />
    <EnergyWidget111 title="EnergyWidget111" />
    <EnergyWidget140 title="EnergyWidget140" />
    <EnergyWidget72 title="EnergyWidget72" />
    <EnergyWidget231 title="EnergyWidget231" />
  </div>
</template>
