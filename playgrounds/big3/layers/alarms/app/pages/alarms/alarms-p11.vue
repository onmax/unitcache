<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState17()
useHead({ title: `Alarms 11 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p11">
    <h1>Alarms page 11 ({{ count }})</h1>
    <AlarmsWidget145 title="AlarmsWidget145" />
    <AlarmsWidget110 title="AlarmsWidget110" />
    <AlarmsWidget218 title="AlarmsWidget218" />
    <AlarmsWidget19 title="AlarmsWidget19" />
  </div>
</template>
