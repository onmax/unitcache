<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState10()
useHead({ title: `Settings 0 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p0">
    <h1>Settings page 0 ({{ count }})</h1>
    <SettingsWidget96 title="SettingsWidget96" />
    <SettingsWidget13 title="SettingsWidget13" />
    <SettingsWidget120 title="SettingsWidget120" />
    <SettingsWidget58 title="SettingsWidget58" />
  </div>
</template>
