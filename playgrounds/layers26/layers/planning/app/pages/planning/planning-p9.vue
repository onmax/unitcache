<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState2()
useHead({ title: `Planning 9 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p9">
    <h1>Planning page 9 ({{ count }})</h1>
    <PlanningWidget143 title="PlanningWidget143" />
    <PlanningWidget17 title="PlanningWidget17" />
    <PlanningWidget48 title="PlanningWidget48" />
    <PlanningWidget70 title="PlanningWidget70" />
  </div>
</template>
