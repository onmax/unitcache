<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState10()
useHead({ title: `Planning 6 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p6">
    <h1>Planning page 6 ({{ count }})</h1>
    <PlanningWidget63 title="PlanningWidget63" />
    <PlanningWidget82 title="PlanningWidget82" />
    <PlanningWidget62 title="PlanningWidget62" />
    <PlanningWidget0 title="PlanningWidget0" />
  </div>
</template>
