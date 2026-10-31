<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState23()
useHead({ title: `Alarms 6 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p6">
    <h1>Alarms page 6 ({{ count }})</h1>
    <AlarmsWidget113 title="AlarmsWidget113" />
    <AlarmsWidget110 title="AlarmsWidget110" />
    <AlarmsWidget63 title="AlarmsWidget63" />
    <AlarmsWidget132 title="AlarmsWidget132" />
    <AlarmsWidget87 title="AlarmsWidget87" />
  </div>
</template>
