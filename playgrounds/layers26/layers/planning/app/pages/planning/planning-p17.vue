<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState12()
useHead({ title: `Planning 17 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p17">
    <h1>Planning page 17 ({{ count }})</h1>
    <PlanningWidget100 title="PlanningWidget100" />
    <PlanningWidget189 title="PlanningWidget189" />
    <PlanningWidget80 title="PlanningWidget80" />
    <PlanningWidget33 title="PlanningWidget33" />
    <PlanningWidget162 title="PlanningWidget162" />
    <PlanningWidget63 title="PlanningWidget63" />
  </div>
</template>
