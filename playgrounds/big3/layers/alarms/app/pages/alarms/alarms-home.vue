<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState0()
useHead({ title: `Alarms 0 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p0">
    <h1>Alarms page 0 ({{ count }})</h1>
    <AlarmsWidget160 title="AlarmsWidget160" />
    <AlarmsWidget192 title="AlarmsWidget192" />
    <AlarmsWidget5 title="AlarmsWidget5" />
  </div>
</template>
