<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState18()
useHead({ title: `Planning 1 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p1">
    <h1>Planning page 1 ({{ count }})</h1>
    <PlanningWidget183 title="PlanningWidget183" />
    <PlanningWidget243 title="PlanningWidget243" />
    <PlanningWidget179 title="PlanningWidget179" />
  </div>
</template>
