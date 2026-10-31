<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState22()
useHead({ title: `Alarms 12 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p12">
    <h1>Alarms page 12 ({{ count }})</h1>
    <AlarmsWidget92 title="AlarmsWidget92" />
    <AlarmsWidget18 title="AlarmsWidget18" />
    <AlarmsWidget56 title="AlarmsWidget56" />
    <AlarmsWidget83 title="AlarmsWidget83" />
    <AlarmsWidget50 title="AlarmsWidget50" />
  </div>
</template>
