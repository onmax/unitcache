<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['settings-guard'] })
const route = useRoute()
const { count } = useSettingsState1()
useHead({ title: `Settings 9 ${route.params.settingsId ?? ''}` })
</script>

<template>
  <div class="page settings-p9">
    <h1>Settings page 9 ({{ count }})</h1>
    <SettingsWidget164 title="SettingsWidget164" />
    <SettingsWidget62 title="SettingsWidget62" />
    <SettingsWidget48 title="SettingsWidget48" />
    <SettingsWidget141 title="SettingsWidget141" />
  </div>
</template>
