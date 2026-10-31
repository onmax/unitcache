<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState29()
useHead({ title: `Planning 10 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p10">
    <h1>Planning page 10 ({{ count }})</h1>
    <PlanningWidget59 title="PlanningWidget59" />
    <PlanningWidget30 title="PlanningWidget30" />
    <PlanningWidget114 title="PlanningWidget114" />
  </div>
</template>
