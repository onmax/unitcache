<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState19()
useHead({ title: `Alarms 11 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p11">
    <h1>Alarms page 11 ({{ count }})</h1>
    <AlarmsWidget76 title="AlarmsWidget76" />
    <AlarmsWidget34 title="AlarmsWidget34" />
    <AlarmsWidget63 title="AlarmsWidget63" />
    <AlarmsWidget145 title="AlarmsWidget145" />
    <AlarmsWidget120 title="AlarmsWidget120" />
  </div>
</template>
