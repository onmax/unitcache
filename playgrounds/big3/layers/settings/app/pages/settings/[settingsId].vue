<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState25()
useHead({ title: `Settings 1 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p1">
    <h1>Settings page 1 ({{ count }})</h1>
    <SettingsWidget200 title="SettingsWidget200" />
    <SettingsWidget91 title="SettingsWidget91" />
    <SettingsWidget71 title="SettingsWidget71" />
    <SettingsWidget150 title="SettingsWidget150" />
    <SettingsWidget20 title="SettingsWidget20" />
    <SettingsWidget120 title="SettingsWidget120" />
  </div>
</template>
