<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState14()
useHead({ title: `Planning 16 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p16">
    <h1>Planning page 16 ({{ count }})</h1>
    <PlanningWidget106 title="PlanningWidget106" />
    <PlanningWidget73 title="PlanningWidget73" />
    <PlanningWidget122 title="PlanningWidget122" />
    <PlanningWidget110 title="PlanningWidget110" />
  </div>
</template>
