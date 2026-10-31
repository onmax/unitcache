<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState13()
useHead({ title: `Settings 6 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p6">
    <h1>Settings page 6 ({{ count }})</h1>
    <SettingsWidget110 title="SettingsWidget110" />
    <SettingsWidget95 title="SettingsWidget95" />
    <SettingsWidget17 title="SettingsWidget17" />
    <SettingsWidget25 title="SettingsWidget25" />
    <SettingsWidget69 title="SettingsWidget69" />
  </div>
</template>
