<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState25()
useHead({ title: `Settings 11 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p11">
    <h1>Settings page 11 ({{ count }})</h1>
    <SettingsWidget25 title="SettingsWidget25" />
    <SettingsWidget86 title="SettingsWidget86" />
    <SettingsWidget52 title="SettingsWidget52" />
    <SettingsWidget49 title="SettingsWidget49" />
    <SettingsWidget65 title="SettingsWidget65" />
    <SettingsWidget54 title="SettingsWidget54" />
  </div>
</template>
