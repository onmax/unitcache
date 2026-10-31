<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState24()
useHead({ title: `Alarms 16 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p16">
    <h1>Alarms page 16 ({{ count }})</h1>
    <AlarmsWidget41 title="AlarmsWidget41" />
    <AlarmsWidget141 title="AlarmsWidget141" />
    <AlarmsWidget228 title="AlarmsWidget228" />
    <AlarmsWidget186 title="AlarmsWidget186" />
    <AlarmsWidget225 title="AlarmsWidget225" />
    <AlarmsWidget26 title="AlarmsWidget26" />
  </div>
</template>
