<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState3()
useHead({ title: `Alarms 1 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p1">
    <h1>Alarms page 1 ({{ count }})</h1>
    <AlarmsWidget70 title="AlarmsWidget70" />
    <AlarmsWidget198 title="AlarmsWidget198" />
    <AlarmsWidget233 title="AlarmsWidget233" />
    <AlarmsWidget185 title="AlarmsWidget185" />
    <AlarmsWidget1 title="AlarmsWidget1" />
  </div>
</template>
