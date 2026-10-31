<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState20()
useHead({ title: `Planning 15 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p15">
    <h1>Planning page 15 ({{ count }})</h1>
    <PlanningWidget128 title="PlanningWidget128" />
    <PlanningWidget130 title="PlanningWidget130" />
    <PlanningWidget190 title="PlanningWidget190" />
    <PlanningWidget54 title="PlanningWidget54" />
    <PlanningWidget204 title="PlanningWidget204" />
  </div>
</template>
