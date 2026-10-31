<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState4()
useHead({ title: `Settings 12 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p12">
    <h1>Settings page 12 ({{ count }})</h1>
    <SettingsWidget151 title="SettingsWidget151" />
    <SettingsWidget104 title="SettingsWidget104" />
    <SettingsWidget248 title="SettingsWidget248" />
  </div>
</template>
