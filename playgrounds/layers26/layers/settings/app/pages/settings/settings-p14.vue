<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState22()
useHead({ title: `Settings 14 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p14">
    <h1>Settings page 14 ({{ count }})</h1>
    <SettingsWidget127 title="SettingsWidget127" />
    <SettingsWidget180 title="SettingsWidget180" />
    <SettingsWidget85 title="SettingsWidget85" />
    <SettingsWidget2 title="SettingsWidget2" />
    <SettingsWidget232 title="SettingsWidget232" />
  </div>
</template>
