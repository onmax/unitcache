<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState0()
useHead({ title: `Settings 4 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p4">
    <h1>Settings page 4 ({{ count }})</h1>
    <SettingsWidget197 title="SettingsWidget197" />
    <SettingsWidget131 title="SettingsWidget131" />
    <SettingsWidget166 title="SettingsWidget166" />
    <SettingsWidget233 title="SettingsWidget233" />
    <SettingsWidget123 title="SettingsWidget123" />
  </div>
</template>
