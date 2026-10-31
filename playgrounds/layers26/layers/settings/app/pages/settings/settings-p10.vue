<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState24()
useHead({ title: `Settings 10 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p10">
    <h1>Settings page 10 ({{ count }})</h1>
    <SettingsWidget213 title="SettingsWidget213" />
    <SettingsWidget100 title="SettingsWidget100" />
    <SettingsWidget122 title="SettingsWidget122" />
    <SettingsWidget201 title="SettingsWidget201" />
  </div>
</template>
