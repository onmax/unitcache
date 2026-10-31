<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState12()
useHead({ title: `Settings 16 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p16">
    <h1>Settings page 16 ({{ count }})</h1>
    <SettingsWidget85 title="SettingsWidget85" />
    <SettingsWidget76 title="SettingsWidget76" />
    <SettingsWidget161 title="SettingsWidget161" />
    <SettingsWidget199 title="SettingsWidget199" />
    <SettingsWidget190 title="SettingsWidget190" />
    <SettingsWidget103 title="SettingsWidget103" />
  </div>
</template>
