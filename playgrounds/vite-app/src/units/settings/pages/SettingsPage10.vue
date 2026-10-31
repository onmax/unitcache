<script setup lang="ts">

const route = useRoute()
const { count } = useSettingsState9()
onMounted(() => { document.title = `Settings 10 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p10">
    <h1>Settings page 10 ({{ count }})</h1>
    <SettingsWidget156 title="SettingsWidget156" />
    <SettingsWidget114 title="SettingsWidget114" />
    <SettingsWidget151 title="SettingsWidget151" />
    <SettingsWidget26 title="SettingsWidget26" />
  </div>
</template>

<style scoped>
.settings-p10 { display: grid; gap: 11px; }
</style>
