<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState20()
useHead({ title: `Alarms 12 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p12">
    <h1>Alarms page 12 ({{ count }})</h1>
    <AlarmsWidget228 title="AlarmsWidget228" />
    <AlarmsWidget215 title="AlarmsWidget215" />
    <AlarmsWidget78 title="AlarmsWidget78" />
    <AlarmsWidget148 title="AlarmsWidget148" />
    <AlarmsWidget137 title="AlarmsWidget137" />
  </div>
</template>
