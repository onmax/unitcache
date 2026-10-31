<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState22()
useHead({ title: `Alarms 7 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p7">
    <h1>Alarms page 7 ({{ count }})</h1>
    <AlarmsWidget193 title="AlarmsWidget193" />
    <AlarmsWidget240 title="AlarmsWidget240" />
    <AlarmsWidget103 title="AlarmsWidget103" />
    <AlarmsWidget125 title="AlarmsWidget125" />
    <AlarmsWidget10 title="AlarmsWidget10" />
  </div>
</template>
