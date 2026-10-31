<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState24()
useHead({ title: `Alarms 9 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p9">
    <h1>Alarms page 9 ({{ count }})</h1>
    <AlarmsWidget30 title="AlarmsWidget30" />
    <AlarmsWidget71 title="AlarmsWidget71" />
    <AlarmsWidget77 title="AlarmsWidget77" />
    <AlarmsWidget28 title="AlarmsWidget28" />
    <AlarmsWidget8 title="AlarmsWidget8" />
    <AlarmsWidget242 title="AlarmsWidget242" />
  </div>
</template>
