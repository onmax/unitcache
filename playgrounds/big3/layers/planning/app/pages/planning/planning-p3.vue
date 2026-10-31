<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState29()
useHead({ title: `Planning 3 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p3">
    <h1>Planning page 3 ({{ count }})</h1>
    <PlanningWidget187 title="PlanningWidget187" />
    <PlanningWidget122 title="PlanningWidget122" />
    <PlanningWidget246 title="PlanningWidget246" />
  </div>
</template>
