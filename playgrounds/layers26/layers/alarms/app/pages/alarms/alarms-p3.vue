<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['alarms-guard'] })
const route = useRoute()
const { count } = useAlarmsState20()
useHead({ title: `Alarms 3 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p3">
    <h1>Alarms page 3 ({{ count }})</h1>
    <AlarmsWidget145 title="AlarmsWidget145" />
    <AlarmsWidget245 title="AlarmsWidget245" />
    <AlarmsWidget91 title="AlarmsWidget91" />
    <AlarmsWidget122 title="AlarmsWidget122" />
    <AlarmsWidget170 title="AlarmsWidget170" />
  </div>
</template>
