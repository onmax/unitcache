<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState21()
useHead({ title: `Alarms 13 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p13">
    <h1>Alarms page 13 ({{ count }})</h1>
    <AlarmsWidget46 title="AlarmsWidget46" />
    <AlarmsWidget141 title="AlarmsWidget141" />
    <AlarmsWidget10 title="AlarmsWidget10" />
  </div>
</template>
