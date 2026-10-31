<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState26()
useHead({ title: `Alarms 16 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p16">
    <h1>Alarms page 16 ({{ count }})</h1>
    <AlarmsWidget199 title="AlarmsWidget199" />
    <AlarmsWidget247 title="AlarmsWidget247" />
    <AlarmsWidget52 title="AlarmsWidget52" />
    <AlarmsWidget83 title="AlarmsWidget83" />
    <AlarmsWidget227 title="AlarmsWidget227" />
    <AlarmsWidget13 title="AlarmsWidget13" />
  </div>
</template>
