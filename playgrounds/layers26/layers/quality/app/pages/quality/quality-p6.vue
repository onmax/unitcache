<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState0()
useHead({ title: `Quality 6 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p6">
    <h1>Quality page 6 ({{ count }})</h1>
    <QualityWidget214 title="QualityWidget214" />
    <QualityWidget215 title="QualityWidget215" />
    <QualityWidget95 title="QualityWidget95" />
  </div>
</template>
