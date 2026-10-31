<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState25()
useHead({ title: `Planning 17 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p17">
    <h1>Planning page 17 ({{ count }})</h1>
    <PlanningWidget102 title="PlanningWidget102" />
    <PlanningWidget172 title="PlanningWidget172" />
    <PlanningWidget31 title="PlanningWidget31" />
  </div>
</template>
