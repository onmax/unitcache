<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState22()
useHead({ title: `Quality 7 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p7">
    <h1>Quality page 7 ({{ count }})</h1>
    <QualityWidget54 title="QualityWidget54" />
    <QualityWidget23 title="QualityWidget23" />
    <QualityWidget7 title="QualityWidget7" />
    <QualityWidget202 title="QualityWidget202" />
    <QualityWidget91 title="QualityWidget91" />
    <QualityWidget212 title="QualityWidget212" />
  </div>
</template>
