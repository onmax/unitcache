<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState18()
useHead({ title: `Settings 3 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p3">
    <h1>Settings page 3 ({{ count }})</h1>
    <SettingsWidget188 title="SettingsWidget188" />
    <SettingsWidget41 title="SettingsWidget41" />
    <SettingsWidget19 title="SettingsWidget19" />
    <SettingsWidget88 title="SettingsWidget88" />
  </div>
</template>
