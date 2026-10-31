<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState28()
useHead({ title: `Alarms 2 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p2">
    <h1>Alarms page 2 ({{ count }})</h1>
    <AlarmsWidget149 title="AlarmsWidget149" />
    <AlarmsWidget30 title="AlarmsWidget30" />
    <AlarmsWidget9 title="AlarmsWidget9" />
    <AlarmsWidget154 title="AlarmsWidget154" />
    <AlarmsWidget55 title="AlarmsWidget55" />
    <AlarmsWidget118 title="AlarmsWidget118" />
  </div>
</template>
