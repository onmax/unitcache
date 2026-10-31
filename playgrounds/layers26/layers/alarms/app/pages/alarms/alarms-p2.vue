<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState25()
useHead({ title: `Alarms 2 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p2">
    <h1>Alarms page 2 ({{ count }})</h1>
    <AlarmsWidget51 title="AlarmsWidget51" />
    <AlarmsWidget150 title="AlarmsWidget150" />
    <AlarmsWidget189 title="AlarmsWidget189" />
    <AlarmsWidget249 title="AlarmsWidget249" />
  </div>
</template>
