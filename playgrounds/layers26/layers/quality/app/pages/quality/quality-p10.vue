<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState15()
useHead({ title: `Quality 10 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p10">
    <h1>Quality page 10 ({{ count }})</h1>
    <QualityWidget33 title="QualityWidget33" />
    <QualityWidget110 title="QualityWidget110" />
    <QualityWidget195 title="QualityWidget195" />
  </div>
</template>
