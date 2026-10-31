<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState2()
useHead({ title: `Planning 9 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p9">
    <h1>Planning page 9 ({{ count }})</h1>
    <PlanningWidget169 title="PlanningWidget169" />
    <PlanningWidget26 title="PlanningWidget26" />
    <PlanningWidget29 title="PlanningWidget29" />
    <PlanningWidget41 title="PlanningWidget41" />
    <PlanningWidget96 title="PlanningWidget96" />
    <PlanningWidget3 title="PlanningWidget3" />
  </div>
</template>
