<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState17()
useHead({ title: `Alarms 19 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p19">
    <h1>Alarms page 19 ({{ count }})</h1>
    <AlarmsWidget11 title="AlarmsWidget11" />
    <AlarmsWidget244 title="AlarmsWidget244" />
    <AlarmsWidget163 title="AlarmsWidget163" />
    <AlarmsWidget101 title="AlarmsWidget101" />
  </div>
</template>
