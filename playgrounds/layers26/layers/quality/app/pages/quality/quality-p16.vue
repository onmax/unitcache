<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState0()
useHead({ title: `Quality 16 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p16">
    <h1>Quality page 16 ({{ count }})</h1>
    <QualityWidget235 title="QualityWidget235" />
    <QualityWidget158 title="QualityWidget158" />
    <QualityWidget245 title="QualityWidget245" />
    <QualityWidget151 title="QualityWidget151" />
    <QualityWidget115 title="QualityWidget115" />
  </div>
</template>
