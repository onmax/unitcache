<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState15()
useHead({ title: `Alarms 17 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p17">
    <h1>Alarms page 17 ({{ count }})</h1>
    <AlarmsWidget67 title="AlarmsWidget67" />
    <AlarmsWidget122 title="AlarmsWidget122" />
    <AlarmsWidget100 title="AlarmsWidget100" />
  </div>
</template>
