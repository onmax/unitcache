<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState16()
useHead({ title: `Alarms 15 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p15">
    <h1>Alarms page 15 ({{ count }})</h1>
    <AlarmsWidget210 title="AlarmsWidget210" />
    <AlarmsWidget18 title="AlarmsWidget18" />
    <AlarmsWidget147 title="AlarmsWidget147" />
  </div>
</template>
