<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState1()
useHead({ title: `Settings 13 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p13">
    <h1>Settings page 13 ({{ count }})</h1>
    <SettingsWidget151 title="SettingsWidget151" />
    <SettingsWidget206 title="SettingsWidget206" />
    <SettingsWidget249 title="SettingsWidget249" />
    <SettingsWidget86 title="SettingsWidget86" />
    <SettingsWidget118 title="SettingsWidget118" />
  </div>
</template>
