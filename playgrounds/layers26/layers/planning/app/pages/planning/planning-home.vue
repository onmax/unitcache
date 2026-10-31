<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState16()
useHead({ title: `Planning 0 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p0">
    <h1>Planning page 0 ({{ count }})</h1>
    <PlanningWidget22 title="PlanningWidget22" />
    <PlanningWidget144 title="PlanningWidget144" />
    <PlanningWidget204 title="PlanningWidget204" />
  </div>
</template>
