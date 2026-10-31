<script setup lang="ts">

const route = useRoute()
const { count } = useAlarmsState17()
onMounted(() => { document.title = `Alarms 9 ${route.params.alarmsId ?? ''}` })
</script>

<template>
  <div class="page alarms-p9">
    <h1>Alarms page 9 ({{ count }})</h1>
    <AlarmsWidget81 title="AlarmsWidget81" />
    <AlarmsWidget38 title="AlarmsWidget38" />
    <AlarmsWidget15 title="AlarmsWidget15" />
    <AlarmsWidget76 title="AlarmsWidget76" />
  </div>
</template>

<style scoped>
.alarms-p9 { display: grid; gap: 19px; }
</style>
