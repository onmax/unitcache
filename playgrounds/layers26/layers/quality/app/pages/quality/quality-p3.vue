<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState26()
useHead({ title: `Quality 3 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p3">
    <h1>Quality page 3 ({{ count }})</h1>
    <QualityWidget80 title="QualityWidget80" />
    <QualityWidget184 title="QualityWidget184" />
    <QualityWidget158 title="QualityWidget158" />
    <QualityWidget103 title="QualityWidget103" />
  </div>
</template>
