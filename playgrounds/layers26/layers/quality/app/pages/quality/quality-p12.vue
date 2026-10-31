<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState13()
useHead({ title: `Quality 12 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p12">
    <h1>Quality page 12 ({{ count }})</h1>
    <QualityWidget245 title="QualityWidget245" />
    <QualityWidget134 title="QualityWidget134" />
    <QualityWidget123 title="QualityWidget123" />
    <QualityWidget95 title="QualityWidget95" />
    <QualityWidget146 title="QualityWidget146" />
  </div>
</template>
