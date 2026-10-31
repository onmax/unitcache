<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState24()
useHead({ title: `Settings 4 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p4">
    <h1>Settings page 4 ({{ count }})</h1>
    <SettingsWidget9 title="SettingsWidget9" />
    <SettingsWidget156 title="SettingsWidget156" />
    <SettingsWidget163 title="SettingsWidget163" />
    <SettingsWidget192 title="SettingsWidget192" />
    <SettingsWidget246 title="SettingsWidget246" />
  </div>
</template>
