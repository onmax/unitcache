<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState15()
useHead({ title: `Planning 0 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p0">
    <h1>Planning page 0 ({{ count }})</h1>
    <PlanningWidget22 title="PlanningWidget22" />
    <PlanningWidget237 title="PlanningWidget237" />
    <PlanningWidget117 title="PlanningWidget117" />
    <PlanningWidget50 title="PlanningWidget50" />
    <PlanningWidget80 title="PlanningWidget80" />
  </div>
</template>
