<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState20()
useHead({ title: `Settings 10 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p10">
    <h1>Settings page 10 ({{ count }})</h1>
    <SettingsWidget245 title="SettingsWidget245" />
    <SettingsWidget179 title="SettingsWidget179" />
    <SettingsWidget2 title="SettingsWidget2" />
  </div>
</template>
