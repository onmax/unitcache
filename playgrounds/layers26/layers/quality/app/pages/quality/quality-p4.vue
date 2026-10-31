<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState10()
useHead({ title: `Quality 4 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p4">
    <h1>Quality page 4 ({{ count }})</h1>
    <QualityWidget87 title="QualityWidget87" />
    <QualityWidget182 title="QualityWidget182" />
    <QualityWidget25 title="QualityWidget25" />
    <QualityWidget105 title="QualityWidget105" />
    <QualityWidget13 title="QualityWidget13" />
    <QualityWidget94 title="QualityWidget94" />
  </div>
</template>
