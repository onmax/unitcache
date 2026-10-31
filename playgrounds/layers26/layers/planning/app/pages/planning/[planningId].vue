<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState8()
useHead({ title: `Planning 1 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p1">
    <h1>Planning page 1 ({{ count }})</h1>
    <PlanningWidget10 title="PlanningWidget10" />
    <PlanningWidget117 title="PlanningWidget117" />
    <PlanningWidget232 title="PlanningWidget232" />
    <PlanningWidget242 title="PlanningWidget242" />
    <PlanningWidget240 title="PlanningWidget240" />
    <PlanningWidget91 title="PlanningWidget91" />
  </div>
</template>
