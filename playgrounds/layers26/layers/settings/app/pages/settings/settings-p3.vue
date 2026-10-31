<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState11()
useHead({ title: `Settings 3 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p3">
    <h1>Settings page 3 ({{ count }})</h1>
    <SettingsWidget49 title="SettingsWidget49" />
    <SettingsWidget196 title="SettingsWidget196" />
    <SettingsWidget123 title="SettingsWidget123" />
    <SettingsWidget68 title="SettingsWidget68" />
    <SettingsWidget232 title="SettingsWidget232" />
  </div>
</template>
