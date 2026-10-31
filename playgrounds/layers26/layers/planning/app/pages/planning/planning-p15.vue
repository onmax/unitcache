<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState22()
useHead({ title: `Planning 15 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p15">
    <h1>Planning page 15 ({{ count }})</h1>
    <PlanningWidget18 title="PlanningWidget18" />
    <PlanningWidget61 title="PlanningWidget61" />
    <PlanningWidget89 title="PlanningWidget89" />
  </div>
</template>
