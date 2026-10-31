<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState25()
useHead({ title: `Planning 2 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p2">
    <h1>Planning page 2 ({{ count }})</h1>
    <PlanningWidget220 title="PlanningWidget220" />
    <PlanningWidget230 title="PlanningWidget230" />
    <PlanningWidget211 title="PlanningWidget211" />
  </div>
</template>
