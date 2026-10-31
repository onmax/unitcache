<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['energy-guard'] })
const route = useRoute()
const { count } = useEnergyState21()
useHead({ title: `Energy 17 ${route.params.energyId ?? ''}` })
</script>

<template>
  <div class="page energy-p17">
    <h1>Energy page 17 ({{ count }})</h1>
    <EnergyWidget154 title="EnergyWidget154" />
    <EnergyWidget183 title="EnergyWidget183" />
    <EnergyWidget60 title="EnergyWidget60" />
    <EnergyWidget202 title="EnergyWidget202" />
    <EnergyWidget242 title="EnergyWidget242" />
  </div>
</template>
