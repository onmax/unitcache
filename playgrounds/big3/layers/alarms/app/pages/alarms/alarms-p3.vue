<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState19()
useHead({ title: `Alarms 3 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p3">
    <h1>Alarms page 3 ({{ count }})</h1>
    <AlarmsWidget206 title="AlarmsWidget206" />
    <AlarmsWidget232 title="AlarmsWidget232" />
    <AlarmsWidget155 title="AlarmsWidget155" />
    <AlarmsWidget12 title="AlarmsWidget12" />
  </div>
</template>
