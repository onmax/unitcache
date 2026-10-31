<script setup lang="ts">

const route = useRoute()
const { count } = useSettingsState11()
onMounted(() => { document.title = `Settings 2 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p2">
    <h1>Settings page 2 ({{ count }})</h1>
    <SettingsWidget71 title="SettingsWidget71" />
    <SettingsWidget131 title="SettingsWidget131" />
    <SettingsWidget16 title="SettingsWidget16" />
    <SettingsWidget46 title="SettingsWidget46" />
    <SettingsWidget127 title="SettingsWidget127" />
    <SettingsWidget38 title="SettingsWidget38" />
  </div>
</template>

<style scoped>
.settings-p2 { display: grid; gap: 14px; }
</style>
