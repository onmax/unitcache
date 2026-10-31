<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState28()
useHead({ title: `Settings 12 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p12">
    <h1>Settings page 12 ({{ count }})</h1>
    <SettingsWidget162 title="SettingsWidget162" />
    <SettingsWidget31 title="SettingsWidget31" />
    <SettingsWidget179 title="SettingsWidget179" />
  </div>
</template>
