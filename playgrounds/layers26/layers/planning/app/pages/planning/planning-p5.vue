<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState27()
useHead({ title: `Planning 5 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p5">
    <h1>Planning page 5 ({{ count }})</h1>
    <PlanningWidget68 title="PlanningWidget68" />
    <PlanningWidget177 title="PlanningWidget177" />
    <PlanningWidget108 title="PlanningWidget108" />
    <PlanningWidget115 title="PlanningWidget115" />
    <PlanningWidget0 title="PlanningWidget0" />
  </div>
</template>
