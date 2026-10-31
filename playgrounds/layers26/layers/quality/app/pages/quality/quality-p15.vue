<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState5()
useHead({ title: `Quality 15 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p15">
    <h1>Quality page 15 ({{ count }})</h1>
    <QualityWidget73 title="QualityWidget73" />
    <QualityWidget53 title="QualityWidget53" />
    <QualityWidget130 title="QualityWidget130" />
    <QualityWidget223 title="QualityWidget223" />
    <QualityWidget21 title="QualityWidget21" />
    <QualityWidget180 title="QualityWidget180" />
  </div>
</template>
