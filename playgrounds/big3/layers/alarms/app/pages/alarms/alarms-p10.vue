<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState29()
useHead({ title: `Alarms 10 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p10">
    <h1>Alarms page 10 ({{ count }})</h1>
    <AlarmsWidget109 title="AlarmsWidget109" />
    <AlarmsWidget194 title="AlarmsWidget194" />
    <AlarmsWidget63 title="AlarmsWidget63" />
    <AlarmsWidget120 title="AlarmsWidget120" />
    <AlarmsWidget173 title="AlarmsWidget173" />
  </div>
</template>
