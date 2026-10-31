<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState3()
useHead({ title: `Planning 13 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p13">
    <h1>Planning page 13 ({{ count }})</h1>
    <PlanningWidget150 title="PlanningWidget150" />
    <PlanningWidget129 title="PlanningWidget129" />
    <PlanningWidget50 title="PlanningWidget50" />
    <PlanningWidget131 title="PlanningWidget131" />
    <PlanningWidget16 title="PlanningWidget16" />
  </div>
</template>
