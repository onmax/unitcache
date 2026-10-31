<script setup lang="ts">
import '../styles/settings-theme.css'
import { settingsCatalog } from '../utils/settingsCatalog'

const route = useRoute()
const { count } = useSettingsState16()
onMounted(() => { document.title = `Settings 0 ${route.params.settingsId ?? ''}` })

const report = shallowRef<string[]>([])
async function loadReport () {
  const { buildSettingsReport } = await import('../heavy/settings-heavy')
  report.value = buildSettingsReport(52)
}
</script>

<template>
  <div class="page settings-p0">
    <h1>Settings page 0 ({{ count }})</h1>
    <p class="catalog">{{ settingsCatalog.length }} catalog entries</p>
    <button type="button" @click="loadReport">Report</button>
    <pre v-if="report.length">{{ report.join('\n') }}</pre>
    <SettingsWidget43 title="SettingsWidget43" />
    <SettingsWidget102 title="SettingsWidget102" />
    <SettingsWidget90 title="SettingsWidget90" />
    <SettingsWidget107 title="SettingsWidget107" />
  </div>
</template>

<style scoped>
.settings-p0 { display: grid; gap: 20px; }
</style>
