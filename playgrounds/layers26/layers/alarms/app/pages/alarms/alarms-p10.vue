<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState4()
useHead({ title: `Alarms 10 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p10">
    <h1>Alarms page 10 ({{ count }})</h1>
    <AlarmsWidget34 title="AlarmsWidget34" />
    <AlarmsWidget189 title="AlarmsWidget189" />
    <AlarmsWidget244 title="AlarmsWidget244" />
    <AlarmsWidget231 title="AlarmsWidget231" />
    <AlarmsWidget106 title="AlarmsWidget106" />
    <AlarmsWidget108 title="AlarmsWidget108" />
  </div>
</template>
