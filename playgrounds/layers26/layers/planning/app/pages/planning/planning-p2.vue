<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState28()
useHead({ title: `Planning 2 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p2">
    <h1>Planning page 2 ({{ count }})</h1>
    <PlanningWidget99 title="PlanningWidget99" />
    <PlanningWidget82 title="PlanningWidget82" />
    <PlanningWidget112 title="PlanningWidget112" />
    <PlanningWidget130 title="PlanningWidget130" />
    <PlanningWidget196 title="PlanningWidget196" />
  </div>
</template>
