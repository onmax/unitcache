<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState9()
useHead({ title: `Quality 2 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p2">
    <h1>Quality page 2 ({{ count }})</h1>
    <QualityWidget39 title="QualityWidget39" />
    <QualityWidget130 title="QualityWidget130" />
    <QualityWidget73 title="QualityWidget73" />
    <QualityWidget113 title="QualityWidget113" />
    <QualityWidget72 title="QualityWidget72" />
  </div>
</template>
