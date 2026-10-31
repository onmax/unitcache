<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState4()
useHead({ title: `Settings 13 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p13">
    <h1>Settings page 13 ({{ count }})</h1>
    <SettingsWidget226 title="SettingsWidget226" />
    <SettingsWidget113 title="SettingsWidget113" />
    <SettingsWidget64 title="SettingsWidget64" />
    <SettingsWidget131 title="SettingsWidget131" />
  </div>
</template>
