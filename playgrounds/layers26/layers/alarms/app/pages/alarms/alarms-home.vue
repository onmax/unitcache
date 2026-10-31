<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState26()
useHead({ title: `Alarms 0 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p0">
    <h1>Alarms page 0 ({{ count }})</h1>
    <AlarmsWidget102 title="AlarmsWidget102" />
    <AlarmsWidget175 title="AlarmsWidget175" />
    <AlarmsWidget98 title="AlarmsWidget98" />
    <AlarmsWidget234 title="AlarmsWidget234" />
    <AlarmsWidget123 title="AlarmsWidget123" />
  </div>
</template>
