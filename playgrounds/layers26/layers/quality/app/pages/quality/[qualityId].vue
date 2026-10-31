<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState10()
useHead({ title: `Quality 1 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p1">
    <h1>Quality page 1 ({{ count }})</h1>
    <QualityWidget221 title="QualityWidget221" />
    <QualityWidget241 title="QualityWidget241" />
    <QualityWidget97 title="QualityWidget97" />
    <QualityWidget112 title="QualityWidget112" />
    <QualityWidget27 title="QualityWidget27" />
  </div>
</template>
