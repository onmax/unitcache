<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState27()
useHead({ title: `Quality 11 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p11">
    <h1>Quality page 11 ({{ count }})</h1>
    <QualityWidget179 title="QualityWidget179" />
    <QualityWidget147 title="QualityWidget147" />
    <QualityWidget141 title="QualityWidget141" />
  </div>
</template>
