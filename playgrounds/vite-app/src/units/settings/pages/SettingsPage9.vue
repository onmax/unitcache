<script setup lang="ts">

const route = useRoute()
const { count } = useSettingsState7()
onMounted(() => { document.title = `Settings 9 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p9">
    <h1>Settings page 9 ({{ count }})</h1>
    <SettingsWidget4 title="SettingsWidget4" />
    <SettingsWidget169 title="SettingsWidget169" />
    <SettingsWidget98 title="SettingsWidget98" />
    <SettingsWidget163 title="SettingsWidget163" />
  </div>
</template>

<style scoped>
.settings-p9 { display: grid; gap: 11px; }
</style>
