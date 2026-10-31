<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState6()
useHead({ title: `Settings 5 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p5">
    <h1>Settings page 5 ({{ count }})</h1>
    <SettingsWidget104 title="SettingsWidget104" />
    <SettingsWidget160 title="SettingsWidget160" />
    <SettingsWidget51 title="SettingsWidget51" />
    <SettingsWidget174 title="SettingsWidget174" />
    <SettingsWidget229 title="SettingsWidget229" />
  </div>
</template>
