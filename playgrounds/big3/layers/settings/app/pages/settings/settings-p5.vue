<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState26()
useHead({ title: `Settings 5 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p5">
    <h1>Settings page 5 ({{ count }})</h1>
    <SettingsWidget49 title="SettingsWidget49" />
    <SettingsWidget168 title="SettingsWidget168" />
    <SettingsWidget107 title="SettingsWidget107" />
    <SettingsWidget77 title="SettingsWidget77" />
  </div>
</template>
