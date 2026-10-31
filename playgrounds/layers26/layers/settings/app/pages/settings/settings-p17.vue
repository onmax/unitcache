<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState24()
useHead({ title: `Settings 17 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p17">
    <h1>Settings page 17 ({{ count }})</h1>
    <SettingsWidget160 title="SettingsWidget160" />
    <SettingsWidget124 title="SettingsWidget124" />
    <SettingsWidget71 title="SettingsWidget71" />
    <SettingsWidget3 title="SettingsWidget3" />
  </div>
</template>
