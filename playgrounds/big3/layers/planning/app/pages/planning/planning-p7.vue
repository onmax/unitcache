<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['planning-guard'] })
const route = useRoute()
const { count } = usePlanningState9()
useHead({ title: `Planning 7 ${route.params.planningId ?? ''}` })
</script>

<template>
  <div class="page planning-p7">
    <h1>Planning page 7 ({{ count }})</h1>
    <PlanningWidget131 title="PlanningWidget131" />
    <PlanningWidget228 title="PlanningWidget228" />
    <PlanningWidget154 title="PlanningWidget154" />
    <PlanningWidget166 title="PlanningWidget166" />
  </div>
</template>
