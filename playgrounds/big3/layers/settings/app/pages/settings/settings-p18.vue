<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState8()
useHead({ title: `Settings 18 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p18">
    <h1>Settings page 18 ({{ count }})</h1>
    <SettingsWidget237 title="SettingsWidget237" />
    <SettingsWidget192 title="SettingsWidget192" />
    <SettingsWidget226 title="SettingsWidget226" />
    <SettingsWidget193 title="SettingsWidget193" />
  </div>
</template>
