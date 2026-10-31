<script setup lang="ts">

const route = useRoute()
const { count } = useSettingsState18()
onMounted(() => { document.title = `Settings 7 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p7">
    <h1>Settings page 7 ({{ count }})</h1>
    <SettingsWidget116 title="SettingsWidget116" />
    <SettingsWidget62 title="SettingsWidget62" />
    <SettingsWidget73 title="SettingsWidget73" />
    <SettingsWidget65 title="SettingsWidget65" />
  </div>
</template>

<style scoped>
.settings-p7 { display: grid; gap: 24px; }
</style>
