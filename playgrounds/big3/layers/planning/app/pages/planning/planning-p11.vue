<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState11()
useHead({ title: `Planning 11 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p11">
    <h1>Planning page 11 ({{ count }})</h1>
    <PlanningWidget29 title="PlanningWidget29" />
    <PlanningWidget48 title="PlanningWidget48" />
    <PlanningWidget112 title="PlanningWidget112" />
    <PlanningWidget33 title="PlanningWidget33" />
    <PlanningWidget226 title="PlanningWidget226" />
    <PlanningWidget30 title="PlanningWidget30" />
  </div>
</template>
