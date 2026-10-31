<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState2()
useHead({ title: `Settings 8 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p8">
    <h1>Settings page 8 ({{ count }})</h1>
    <SettingsWidget61 title="SettingsWidget61" />
    <SettingsWidget78 title="SettingsWidget78" />
    <SettingsWidget0 title="SettingsWidget0" />
    <SettingsWidget159 title="SettingsWidget159" />
    <SettingsWidget189 title="SettingsWidget189" />
    <SettingsWidget40 title="SettingsWidget40" />
  </div>
</template>
