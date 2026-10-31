<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState29()
useHead({ title: `Planning 13 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p13">
    <h1>Planning page 13 ({{ count }})</h1>
    <PlanningWidget4 title="PlanningWidget4" />
    <PlanningWidget174 title="PlanningWidget174" />
    <PlanningWidget211 title="PlanningWidget211" />
  </div>
</template>
