<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState8()
useHead({ title: `Settings 2 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p2">
    <h1>Settings page 2 ({{ count }})</h1>
    <SettingsWidget207 title="SettingsWidget207" />
    <SettingsWidget220 title="SettingsWidget220" />
    <SettingsWidget97 title="SettingsWidget97" />
    <SettingsWidget209 title="SettingsWidget209" />
    <SettingsWidget202 title="SettingsWidget202" />
    <SettingsWidget54 title="SettingsWidget54" />
  </div>
</template>
