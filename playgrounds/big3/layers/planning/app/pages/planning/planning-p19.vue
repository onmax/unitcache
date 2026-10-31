<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState15()
useHead({ title: `Planning 19 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p19">
    <h1>Planning page 19 ({{ count }})</h1>
    <PlanningWidget78 title="PlanningWidget78" />
    <PlanningWidget88 title="PlanningWidget88" />
    <PlanningWidget91 title="PlanningWidget91" />
    <PlanningWidget183 title="PlanningWidget183" />
  </div>
</template>
