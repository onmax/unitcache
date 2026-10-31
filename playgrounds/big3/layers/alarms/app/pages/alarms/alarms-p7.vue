<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState22()
useHead({ title: `Alarms 7 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p7">
    <h1>Alarms page 7 ({{ count }})</h1>
    <AlarmsWidget234 title="AlarmsWidget234" />
    <AlarmsWidget207 title="AlarmsWidget207" />
    <AlarmsWidget96 title="AlarmsWidget96" />
  </div>
</template>
