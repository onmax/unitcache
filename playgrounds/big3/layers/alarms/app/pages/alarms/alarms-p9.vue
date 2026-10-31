<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState6()
useHead({ title: `Alarms 9 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p9">
    <h1>Alarms page 9 ({{ count }})</h1>
    <AlarmsWidget13 title="AlarmsWidget13" />
    <AlarmsWidget124 title="AlarmsWidget124" />
    <AlarmsWidget14 title="AlarmsWidget14" />
  </div>
</template>
