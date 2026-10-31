<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState13()
useHead({ title: `Quality 0 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p0">
    <h1>Quality page 0 ({{ count }})</h1>
    <QualityWidget227 title="QualityWidget227" />
    <QualityWidget206 title="QualityWidget206" />
    <QualityWidget28 title="QualityWidget28" />
    <QualityWidget170 title="QualityWidget170" />
    <QualityWidget103 title="QualityWidget103" />
  </div>
</template>
