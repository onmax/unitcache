<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState11()
useHead({ title: `Alarms 17 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p17">
    <h1>Alarms page 17 ({{ count }})</h1>
    <AlarmsWidget29 title="AlarmsWidget29" />
    <AlarmsWidget206 title="AlarmsWidget206" />
    <AlarmsWidget27 title="AlarmsWidget27" />
    <AlarmsWidget233 title="AlarmsWidget233" />
    <AlarmsWidget85 title="AlarmsWidget85" />
    <AlarmsWidget13 title="AlarmsWidget13" />
  </div>
</template>
