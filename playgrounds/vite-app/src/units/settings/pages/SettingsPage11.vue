<script setup lang="ts">

const route = useRoute()
const { count } = useSettingsState1()
onMounted(() => { document.title = `Settings 11 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p11">
    <h1>Settings page 11 ({{ count }})</h1>
    <SettingsWidget63 title="SettingsWidget63" />
    <SettingsWidget154 title="SettingsWidget154" />
    <SettingsWidget121 title="SettingsWidget121" />
    <SettingsWidget69 title="SettingsWidget69" />
    <SettingsWidget110 title="SettingsWidget110" />
  </div>
</template>

<style scoped>
.settings-p11 { display: grid; gap: 13px; }
</style>
