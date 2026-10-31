<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState11()
useHead({ title: `Quality 19 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p19">
    <h1>Quality page 19 ({{ count }})</h1>
    <QualityWidget127 title="QualityWidget127" />
    <QualityWidget239 title="QualityWidget239" />
    <QualityWidget165 title="QualityWidget165" />
    <QualityWidget235 title="QualityWidget235" />
    <QualityWidget4 title="QualityWidget4" />
  </div>
</template>
