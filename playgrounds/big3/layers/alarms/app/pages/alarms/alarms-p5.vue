<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState13()
useHead({ title: `Alarms 5 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p5">
    <h1>Alarms page 5 ({{ count }})</h1>
    <AlarmsWidget106 title="AlarmsWidget106" />
    <AlarmsWidget223 title="AlarmsWidget223" />
    <AlarmsWidget130 title="AlarmsWidget130" />
    <AlarmsWidget101 title="AlarmsWidget101" />
  </div>
</template>
