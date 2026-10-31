<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState18()
useHead({ title: `Quality 8 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p8">
    <h1>Quality page 8 ({{ count }})</h1>
    <QualityWidget235 title="QualityWidget235" />
    <QualityWidget196 title="QualityWidget196" />
    <QualityWidget80 title="QualityWidget80" />
  </div>
</template>
