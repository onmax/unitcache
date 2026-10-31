<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState26()
useHead({ title: `Planning 3 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p3">
    <h1>Planning page 3 ({{ count }})</h1>
    <PlanningWidget181 title="PlanningWidget181" />
    <PlanningWidget87 title="PlanningWidget87" />
    <PlanningWidget37 title="PlanningWidget37" />
    <PlanningWidget32 title="PlanningWidget32" />
    <PlanningWidget153 title="PlanningWidget153" />
    <PlanningWidget187 title="PlanningWidget187" />
  </div>
</template>
