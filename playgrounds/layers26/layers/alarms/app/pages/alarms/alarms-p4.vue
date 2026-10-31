<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState15()
useHead({ title: `Alarms 4 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p4">
    <h1>Alarms page 4 ({{ count }})</h1>
    <AlarmsWidget170 title="AlarmsWidget170" />
    <AlarmsWidget107 title="AlarmsWidget107" />
    <AlarmsWidget214 title="AlarmsWidget214" />
    <AlarmsWidget164 title="AlarmsWidget164" />
    <AlarmsWidget244 title="AlarmsWidget244" />
  </div>
</template>
