<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState27()
useHead({ title: `Alarms 13 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p13">
    <h1>Alarms page 13 ({{ count }})</h1>
    <AlarmsWidget158 title="AlarmsWidget158" />
    <AlarmsWidget49 title="AlarmsWidget49" />
    <AlarmsWidget104 title="AlarmsWidget104" />
    <AlarmsWidget33 title="AlarmsWidget33" />
    <AlarmsWidget205 title="AlarmsWidget205" />
  </div>
</template>
