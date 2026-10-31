<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState28()
useHead({ title: `Settings 15 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p15">
    <h1>Settings page 15 ({{ count }})</h1>
    <SettingsWidget26 title="SettingsWidget26" />
    <SettingsWidget91 title="SettingsWidget91" />
    <SettingsWidget41 title="SettingsWidget41" />
  </div>
</template>
