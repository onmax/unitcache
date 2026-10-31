<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState10()
useHead({ title: `Settings 16 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p16">
    <h1>Settings page 16 ({{ count }})</h1>
    <SettingsWidget246 title="SettingsWidget246" />
    <SettingsWidget231 title="SettingsWidget231" />
    <SettingsWidget94 title="SettingsWidget94" />
    <SettingsWidget220 title="SettingsWidget220" />
  </div>
</template>
