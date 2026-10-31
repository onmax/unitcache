<script setup lang="ts">

const route = useRoute()
const { count } = useSettingsState13()
onMounted(() => { document.title = `Settings 3 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p3">
    <h1>Settings page 3 ({{ count }})</h1>
    <SettingsWidget106 title="SettingsWidget106" />
    <SettingsWidget97 title="SettingsWidget97" />
    <SettingsWidget84 title="SettingsWidget84" />
    <SettingsWidget164 title="SettingsWidget164" />
    <SettingsWidget11 title="SettingsWidget11" />
  </div>
</template>

<style scoped>
.settings-p3 { display: grid; gap: 16px; }
</style>
