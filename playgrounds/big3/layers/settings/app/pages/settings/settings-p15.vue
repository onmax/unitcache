<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState8()
useHead({ title: `Settings 15 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p15">
    <h1>Settings page 15 ({{ count }})</h1>
    <SettingsWidget213 title="SettingsWidget213" />
    <SettingsWidget218 title="SettingsWidget218" />
    <SettingsWidget198 title="SettingsWidget198" />
    <SettingsWidget73 title="SettingsWidget73" />
  </div>
</template>
