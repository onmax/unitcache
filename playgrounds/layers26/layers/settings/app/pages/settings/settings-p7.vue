<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState8()
useHead({ title: `Settings 7 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p7">
    <h1>Settings page 7 ({{ count }})</h1>
    <SettingsWidget95 title="SettingsWidget95" />
    <SettingsWidget24 title="SettingsWidget24" />
    <SettingsWidget141 title="SettingsWidget141" />
  </div>
</template>
