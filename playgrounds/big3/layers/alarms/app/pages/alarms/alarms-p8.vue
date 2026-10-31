<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState26()
useHead({ title: `Alarms 8 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p8">
    <h1>Alarms page 8 ({{ count }})</h1>
    <AlarmsWidget158 title="AlarmsWidget158" />
    <AlarmsWidget224 title="AlarmsWidget224" />
    <AlarmsWidget68 title="AlarmsWidget68" />
    <AlarmsWidget225 title="AlarmsWidget225" />
  </div>
</template>
