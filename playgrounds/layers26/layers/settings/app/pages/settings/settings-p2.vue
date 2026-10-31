<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState21()
useHead({ title: `Settings 2 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p2">
    <h1>Settings page 2 ({{ count }})</h1>
    <SettingsWidget17 title="SettingsWidget17" />
    <SettingsWidget191 title="SettingsWidget191" />
    <SettingsWidget237 title="SettingsWidget237" />
  </div>
</template>
