<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState15()
useHead({ title: `Alarms 19 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p19">
    <h1>Alarms page 19 ({{ count }})</h1>
    <AlarmsWidget179 title="AlarmsWidget179" />
    <AlarmsWidget135 title="AlarmsWidget135" />
    <AlarmsWidget102 title="AlarmsWidget102" />
    <AlarmsWidget209 title="AlarmsWidget209" />
    <AlarmsWidget73 title="AlarmsWidget73" />
    <AlarmsWidget0 title="AlarmsWidget0" />
  </div>
</template>
