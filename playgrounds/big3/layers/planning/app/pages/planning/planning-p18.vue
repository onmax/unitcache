<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState9()
useHead({ title: `Planning 18 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p18">
    <h1>Planning page 18 ({{ count }})</h1>
    <PlanningWidget176 title="PlanningWidget176" />
    <PlanningWidget159 title="PlanningWidget159" />
    <PlanningWidget200 title="PlanningWidget200" />
    <PlanningWidget135 title="PlanningWidget135" />
    <PlanningWidget112 title="PlanningWidget112" />
  </div>
</template>
