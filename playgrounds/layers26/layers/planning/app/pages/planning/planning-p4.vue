<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState20()
useHead({ title: `Planning 4 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p4">
    <h1>Planning page 4 ({{ count }})</h1>
    <PlanningWidget171 title="PlanningWidget171" />
    <PlanningWidget160 title="PlanningWidget160" />
    <PlanningWidget217 title="PlanningWidget217" />
  </div>
</template>
