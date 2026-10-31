<script setup lang="ts">

const route = useRoute()
const { count } = useSettingsState16()
onMounted(() => { document.title = `Settings 6 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p6">
    <h1>Settings page 6 ({{ count }})</h1>
    <SettingsWidget97 title="SettingsWidget97" />
    <SettingsWidget20 title="SettingsWidget20" />
    <SettingsWidget13 title="SettingsWidget13" />
    <SettingsWidget91 title="SettingsWidget91" />
  </div>
</template>

<style scoped>
.settings-p6 { display: grid; gap: 18px; }
</style>
