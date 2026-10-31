<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState15()
useHead({ title: `Planning 10 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p10">
    <h1>Planning page 10 ({{ count }})</h1>
    <PlanningWidget200 title="PlanningWidget200" />
    <PlanningWidget115 title="PlanningWidget115" />
    <PlanningWidget223 title="PlanningWidget223" />
    <PlanningWidget108 title="PlanningWidget108" />
  </div>
</template>
