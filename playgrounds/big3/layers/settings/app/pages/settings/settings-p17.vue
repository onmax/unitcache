<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState16()
useHead({ title: `Settings 17 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p17">
    <h1>Settings page 17 ({{ count }})</h1>
    <SettingsWidget151 title="SettingsWidget151" />
    <SettingsWidget156 title="SettingsWidget156" />
    <SettingsWidget159 title="SettingsWidget159" />
    <SettingsWidget27 title="SettingsWidget27" />
    <SettingsWidget162 title="SettingsWidget162" />
    <SettingsWidget58 title="SettingsWidget58" />
  </div>
</template>
