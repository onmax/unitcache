<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState9()
useHead({ title: `Planning 12 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p12">
    <h1>Planning page 12 ({{ count }})</h1>
    <PlanningWidget87 title="PlanningWidget87" />
    <PlanningWidget248 title="PlanningWidget248" />
    <PlanningWidget39 title="PlanningWidget39" />
    <PlanningWidget247 title="PlanningWidget247" />
  </div>
</template>
