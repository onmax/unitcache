<script setup lang="ts">

const route = useRoute()
const { count } = useSettingsState19()
onMounted(() => { document.title = `Settings 1 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p1">
    <h1>Settings page 1 ({{ count }})</h1>
    <SettingsWidget72 title="SettingsWidget72" />
    <SettingsWidget130 title="SettingsWidget130" />
    <SettingsWidget83 title="SettingsWidget83" />
  </div>
</template>

<style scoped>
.settings-p1 { display: grid; gap: 16px; }
</style>
