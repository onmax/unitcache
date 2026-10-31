<script setup lang="ts">

const route = useRoute()
const { count } = useSettingsState11()
onMounted(() => { document.title = `Settings 8 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p8">
    <h1>Settings page 8 ({{ count }})</h1>
    <SettingsWidget45 title="SettingsWidget45" />
    <SettingsWidget58 title="SettingsWidget58" />
    <SettingsWidget107 title="SettingsWidget107" />
  </div>
</template>

<style scoped>
.settings-p8 { display: grid; gap: 16px; }
</style>
