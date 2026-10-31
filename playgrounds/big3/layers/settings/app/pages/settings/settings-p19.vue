<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState26()
useHead({ title: `Settings 19 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p19">
    <h1>Settings page 19 ({{ count }})</h1>
    <SettingsWidget110 title="SettingsWidget110" />
    <SettingsWidget237 title="SettingsWidget237" />
    <SettingsWidget226 title="SettingsWidget226" />
  </div>
</template>
