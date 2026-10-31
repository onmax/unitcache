<script setup lang="ts">

const route = useRoute()
const { count } = useSettingsState1()
onMounted(() => { document.title = `Settings 4 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p4">
    <h1>Settings page 4 ({{ count }})</h1>
    <SettingsWidget81 title="SettingsWidget81" />
    <SettingsWidget6 title="SettingsWidget6" />
    <SettingsWidget62 title="SettingsWidget62" />
  </div>
</template>

<style scoped>
.settings-p4 { display: grid; gap: 22px; }
</style>
