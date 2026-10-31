<script setup lang="ts">

const route = useRoute()
const { count } = useSettingsState7()
onMounted(() => { document.title = `Settings 5 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p5">
    <h1>Settings page 5 ({{ count }})</h1>
    <SettingsWidget21 title="SettingsWidget21" />
    <SettingsWidget112 title="SettingsWidget112" />
    <SettingsWidget113 title="SettingsWidget113" />
    <SettingsWidget77 title="SettingsWidget77" />
  </div>
</template>

<style scoped>
.settings-p5 { display: grid; gap: 12px; }
</style>
