<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState8()
useHead({ title: `Planning 4 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p4">
    <h1>Planning page 4 ({{ count }})</h1>
    <PlanningWidget118 title="PlanningWidget118" />
    <PlanningWidget172 title="PlanningWidget172" />
    <PlanningWidget82 title="PlanningWidget82" />
    <PlanningWidget32 title="PlanningWidget32" />
    <PlanningWidget94 title="PlanningWidget94" />
  </div>
</template>
