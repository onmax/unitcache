<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState8()
useHead({ title: `Settings 18 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p18">
    <h1>Settings page 18 ({{ count }})</h1>
    <SettingsWidget86 title="SettingsWidget86" />
    <SettingsWidget133 title="SettingsWidget133" />
    <SettingsWidget45 title="SettingsWidget45" />
    <SettingsWidget98 title="SettingsWidget98" />
    <SettingsWidget196 title="SettingsWidget196" />
  </div>
</template>
