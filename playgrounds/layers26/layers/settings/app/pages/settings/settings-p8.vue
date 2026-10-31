<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState28()
useHead({ title: `Settings 8 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p8">
    <h1>Settings page 8 ({{ count }})</h1>
    <SettingsWidget29 title="SettingsWidget29" />
    <SettingsWidget63 title="SettingsWidget63" />
    <SettingsWidget64 title="SettingsWidget64" />
    <SettingsWidget146 title="SettingsWidget146" />
  </div>
</template>
