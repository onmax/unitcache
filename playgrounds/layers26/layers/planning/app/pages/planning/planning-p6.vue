<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState14()
useHead({ title: `Planning 6 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p6">
    <h1>Planning page 6 ({{ count }})</h1>
    <PlanningWidget103 title="PlanningWidget103" />
    <PlanningWidget45 title="PlanningWidget45" />
    <PlanningWidget20 title="PlanningWidget20" />
    <PlanningWidget65 title="PlanningWidget65" />
  </div>
</template>
