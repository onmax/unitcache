<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState11()
useHead({ title: `Planning 12 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p12">
    <h1>Planning page 12 ({{ count }})</h1>
    <PlanningWidget133 title="PlanningWidget133" />
    <PlanningWidget138 title="PlanningWidget138" />
    <PlanningWidget219 title="PlanningWidget219" />
    <PlanningWidget91 title="PlanningWidget91" />
  </div>
</template>
