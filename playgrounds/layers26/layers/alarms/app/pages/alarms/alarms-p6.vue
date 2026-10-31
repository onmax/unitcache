<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState2()
useHead({ title: `Alarms 6 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p6">
    <h1>Alarms page 6 ({{ count }})</h1>
    <AlarmsWidget31 title="AlarmsWidget31" />
    <AlarmsWidget171 title="AlarmsWidget171" />
    <AlarmsWidget52 title="AlarmsWidget52" />
    <AlarmsWidget44 title="AlarmsWidget44" />
    <AlarmsWidget170 title="AlarmsWidget170" />
    <AlarmsWidget81 title="AlarmsWidget81" />
  </div>
</template>
