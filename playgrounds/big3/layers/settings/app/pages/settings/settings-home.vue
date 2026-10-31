<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState20()
useHead({ title: `Settings 0 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p0">
    <h1>Settings page 0 ({{ count }})</h1>
    <SettingsWidget6 title="SettingsWidget6" />
    <SettingsWidget216 title="SettingsWidget216" />
    <SettingsWidget161 title="SettingsWidget161" />
    <SettingsWidget105 title="SettingsWidget105" />
  </div>
</template>
