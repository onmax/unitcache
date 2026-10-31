<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState26()
useHead({ title: `Settings 6 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p6">
    <h1>Settings page 6 ({{ count }})</h1>
    <SettingsWidget115 title="SettingsWidget115" />
    <SettingsWidget210 title="SettingsWidget210" />
    <SettingsWidget138 title="SettingsWidget138" />
    <SettingsWidget192 title="SettingsWidget192" />
    <SettingsWidget241 title="SettingsWidget241" />
  </div>
</template>
