<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState18()
useHead({ title: `Planning 8 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p8">
    <h1>Planning page 8 ({{ count }})</h1>
    <PlanningWidget102 title="PlanningWidget102" />
    <PlanningWidget59 title="PlanningWidget59" />
    <PlanningWidget123 title="PlanningWidget123" />
    <PlanningWidget170 title="PlanningWidget170" />
    <PlanningWidget202 title="PlanningWidget202" />
  </div>
</template>
