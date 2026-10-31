<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState25()
useHead({ title: `Planning 14 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p14">
    <h1>Planning page 14 ({{ count }})</h1>
    <PlanningWidget11 title="PlanningWidget11" />
    <PlanningWidget196 title="PlanningWidget196" />
    <PlanningWidget124 title="PlanningWidget124" />
  </div>
</template>
