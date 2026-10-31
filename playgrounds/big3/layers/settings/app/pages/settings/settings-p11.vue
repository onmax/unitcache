<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState20()
useHead({ title: `Settings 11 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p11">
    <h1>Settings page 11 ({{ count }})</h1>
    <SettingsWidget238 title="SettingsWidget238" />
    <SettingsWidget241 title="SettingsWidget241" />
    <SettingsWidget147 title="SettingsWidget147" />
    <SettingsWidget180 title="SettingsWidget180" />
    <SettingsWidget164 title="SettingsWidget164" />
  </div>
</template>
