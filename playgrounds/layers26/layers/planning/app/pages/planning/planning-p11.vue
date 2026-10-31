<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState16()
useHead({ title: `Planning 11 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p11">
    <h1>Planning page 11 ({{ count }})</h1>
    <PlanningWidget88 title="PlanningWidget88" />
    <PlanningWidget155 title="PlanningWidget155" />
    <PlanningWidget190 title="PlanningWidget190" />
    <PlanningWidget15 title="PlanningWidget15" />
    <PlanningWidget247 title="PlanningWidget247" />
    <PlanningWidget148 title="PlanningWidget148" />
  </div>
</template>
