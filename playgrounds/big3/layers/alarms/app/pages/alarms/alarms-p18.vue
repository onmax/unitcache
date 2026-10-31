<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState25()
useHead({ title: `Alarms 18 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p18">
    <h1>Alarms page 18 ({{ count }})</h1>
    <AlarmsWidget95 title="AlarmsWidget95" />
    <AlarmsWidget42 title="AlarmsWidget42" />
    <AlarmsWidget189 title="AlarmsWidget189" />
  </div>
</template>
