<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState13()
useHead({ title: `Planning 7 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p7">
    <h1>Planning page 7 ({{ count }})</h1>
    <PlanningWidget163 title="PlanningWidget163" />
    <PlanningWidget29 title="PlanningWidget29" />
    <PlanningWidget141 title="PlanningWidget141" />
    <PlanningWidget201 title="PlanningWidget201" />
    <PlanningWidget31 title="PlanningWidget31" />
  </div>
</template>
