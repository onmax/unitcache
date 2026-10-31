<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState23()
useHead({ title: `Settings 9 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p9">
    <h1>Settings page 9 ({{ count }})</h1>
    <SettingsWidget88 title="SettingsWidget88" />
    <SettingsWidget56 title="SettingsWidget56" />
    <SettingsWidget102 title="SettingsWidget102" />
    <SettingsWidget175 title="SettingsWidget175" />
  </div>
</template>
