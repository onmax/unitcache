<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState23()
useHead({ title: `Alarms 8 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p8">
    <h1>Alarms page 8 ({{ count }})</h1>
    <AlarmsWidget242 title="AlarmsWidget242" />
    <AlarmsWidget166 title="AlarmsWidget166" />
    <AlarmsWidget7 title="AlarmsWidget7" />
    <AlarmsWidget141 title="AlarmsWidget141" />
  </div>
</template>
