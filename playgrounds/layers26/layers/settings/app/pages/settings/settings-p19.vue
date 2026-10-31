<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState21()
useHead({ title: `Settings 19 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p19">
    <h1>Settings page 19 ({{ count }})</h1>
    <SettingsWidget105 title="SettingsWidget105" />
    <SettingsWidget184 title="SettingsWidget184" />
    <SettingsWidget86 title="SettingsWidget86" />
  </div>
</template>
