<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState17()
useHead({ title: `Planning 14 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p14">
    <h1>Planning page 14 ({{ count }})</h1>
    <PlanningWidget61 title="PlanningWidget61" />
    <PlanningWidget79 title="PlanningWidget79" />
    <PlanningWidget204 title="PlanningWidget204" />
    <PlanningWidget62 title="PlanningWidget62" />
  </div>
</template>
