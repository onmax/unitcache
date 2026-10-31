<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState16()
useHead({ title: `Alarms 1 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p1">
    <h1>Alarms page 1 ({{ count }})</h1>
    <AlarmsWidget221 title="AlarmsWidget221" />
    <AlarmsWidget70 title="AlarmsWidget70" />
    <AlarmsWidget47 title="AlarmsWidget47" />
  </div>
</template>
