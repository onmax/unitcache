<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState25()
useHead({ title: `Alarms 4 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p4">
    <h1>Alarms page 4 ({{ count }})</h1>
    <AlarmsWidget209 title="AlarmsWidget209" />
    <AlarmsWidget194 title="AlarmsWidget194" />
    <AlarmsWidget248 title="AlarmsWidget248" />
  </div>
</template>
