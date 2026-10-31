<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState18()
useHead({ title: `Settings 14 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p14">
    <h1>Settings page 14 ({{ count }})</h1>
    <SettingsWidget180 title="SettingsWidget180" />
    <SettingsWidget122 title="SettingsWidget122" />
    <SettingsWidget126 title="SettingsWidget126" />
    <SettingsWidget172 title="SettingsWidget172" />
    <SettingsWidget33 title="SettingsWidget33" />
    <SettingsWidget91 title="SettingsWidget91" />
  </div>
</template>
