<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState24()
useHead({ title: `Alarms 15 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p15">
    <h1>Alarms page 15 ({{ count }})</h1>
    <AlarmsWidget29 title="AlarmsWidget29" />
    <AlarmsWidget226 title="AlarmsWidget226" />
    <AlarmsWidget233 title="AlarmsWidget233" />
  </div>
</template>
