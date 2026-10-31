<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState1()
useHead({ title: `Alarms 18 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p18">
    <h1>Alarms page 18 ({{ count }})</h1>
    <AlarmsWidget165 title="AlarmsWidget165" />
    <AlarmsWidget19 title="AlarmsWidget19" />
    <AlarmsWidget0 title="AlarmsWidget0" />
    <AlarmsWidget134 title="AlarmsWidget134" />
    <AlarmsWidget26 title="AlarmsWidget26" />
    <AlarmsWidget247 title="AlarmsWidget247" />
  </div>
</template>
