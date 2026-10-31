<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState20()
useHead({ title: `Alarms 14 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p14">
    <h1>Alarms page 14 ({{ count }})</h1>
    <AlarmsWidget142 title="AlarmsWidget142" />
    <AlarmsWidget37 title="AlarmsWidget37" />
    <AlarmsWidget127 title="AlarmsWidget127" />
    <AlarmsWidget92 title="AlarmsWidget92" />
    <AlarmsWidget57 title="AlarmsWidget57" />
    <AlarmsWidget226 title="AlarmsWidget226" />
  </div>
</template>
