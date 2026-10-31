<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState11()
useHead({ title: `Quality 5 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p5">
    <h1>Quality page 5 ({{ count }})</h1>
    <QualityWidget2 title="QualityWidget2" />
    <QualityWidget165 title="QualityWidget165" />
    <QualityWidget102 title="QualityWidget102" />
    <QualityWidget173 title="QualityWidget173" />
    <QualityWidget136 title="QualityWidget136" />
  </div>
</template>
