<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState29()
useHead({ title: `Planning 16 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p16">
    <h1>Planning page 16 ({{ count }})</h1>
    <PlanningWidget13 title="PlanningWidget13" />
    <PlanningWidget38 title="PlanningWidget38" />
    <PlanningWidget180 title="PlanningWidget180" />
  </div>
</template>
