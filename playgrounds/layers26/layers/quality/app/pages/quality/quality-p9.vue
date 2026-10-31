<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState19()
useHead({ title: `Quality 9 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p9">
    <h1>Quality page 9 ({{ count }})</h1>
    <QualityWidget93 title="QualityWidget93" />
    <QualityWidget48 title="QualityWidget48" />
    <QualityWidget192 title="QualityWidget192" />
    <QualityWidget150 title="QualityWidget150" />
    <QualityWidget47 title="QualityWidget47" />
  </div>
</template>
