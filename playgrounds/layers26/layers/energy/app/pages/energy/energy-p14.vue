<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState8()
useHead({ title: `Energy 14 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p14">
    <h1>Energy page 14 ({{ count }})</h1>
    <EnergyWidget248 title="EnergyWidget248" />
    <EnergyWidget52 title="EnergyWidget52" />
    <EnergyWidget10 title="EnergyWidget10" />
  </div>
</template>
