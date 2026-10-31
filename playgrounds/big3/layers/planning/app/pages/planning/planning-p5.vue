<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState3()
useHead({ title: `Planning 5 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p5">
    <h1>Planning page 5 ({{ count }})</h1>
    <PlanningWidget188 title="PlanningWidget188" />
    <PlanningWidget221 title="PlanningWidget221" />
    <PlanningWidget247 title="PlanningWidget247" />
    <PlanningWidget77 title="PlanningWidget77" />
    <PlanningWidget194 title="PlanningWidget194" />
  </div>
</template>
