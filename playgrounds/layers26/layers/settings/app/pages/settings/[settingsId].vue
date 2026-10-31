<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState11()
useHead({ title: `Settings 1 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p1">
    <h1>Settings page 1 ({{ count }})</h1>
    <SettingsWidget238 title="SettingsWidget238" />
    <SettingsWidget193 title="SettingsWidget193" />
    <SettingsWidget248 title="SettingsWidget248" />
    <SettingsWidget174 title="SettingsWidget174" />
    <SettingsWidget125 title="SettingsWidget125" />
  </div>
</template>
