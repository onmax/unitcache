<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState25()
useHead({ title: `Alarms 5 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p5">
    <h1>Alarms page 5 ({{ count }})</h1>
    <AlarmsWidget20 title="AlarmsWidget20" />
    <AlarmsWidget92 title="AlarmsWidget92" />
    <AlarmsWidget201 title="AlarmsWidget201" />
    <AlarmsWidget107 title="AlarmsWidget107" />
  </div>
</template>
