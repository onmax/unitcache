<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState14()
useHead({ title: `Settings 7 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p7">
    <h1>Settings page 7 ({{ count }})</h1>
    <SettingsWidget93 title="SettingsWidget93" />
    <SettingsWidget6 title="SettingsWidget6" />
    <SettingsWidget61 title="SettingsWidget61" />
    <SettingsWidget69 title="SettingsWidget69" />
    <SettingsWidget120 title="SettingsWidget120" />
  </div>
</template>
