<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState26()
useHead({ title: `Planning 19 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p19">
    <h1>Planning page 19 ({{ count }})</h1>
    <PlanningWidget243 title="PlanningWidget243" />
    <PlanningWidget127 title="PlanningWidget127" />
    <PlanningWidget186 title="PlanningWidget186" />
  </div>
</template>
