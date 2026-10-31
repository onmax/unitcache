<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState12()
useHead({ title: `Planning 18 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p18">
    <h1>Planning page 18 ({{ count }})</h1>
    <PlanningWidget7 title="PlanningWidget7" />
    <PlanningWidget4 title="PlanningWidget4" />
    <PlanningWidget189 title="PlanningWidget189" />
    <PlanningWidget26 title="PlanningWidget26" />
    <PlanningWidget155 title="PlanningWidget155" />
  </div>
</template>
