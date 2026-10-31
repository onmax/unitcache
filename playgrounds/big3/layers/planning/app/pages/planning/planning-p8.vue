<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState3()
useHead({ title: `Planning 8 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p8">
    <h1>Planning page 8 ({{ count }})</h1>
    <PlanningWidget64 title="PlanningWidget64" />
    <PlanningWidget205 title="PlanningWidget205" />
    <PlanningWidget82 title="PlanningWidget82" />
  </div>
</template>
