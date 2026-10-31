<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState14()
useHead({ title: `Alarms 14 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p14">
    <h1>Alarms page 14 ({{ count }})</h1>
    <AlarmsWidget165 title="AlarmsWidget165" />
    <AlarmsWidget177 title="AlarmsWidget177" />
    <AlarmsWidget212 title="AlarmsWidget212" />
    <AlarmsWidget157 title="AlarmsWidget157" />
  </div>
</template>
