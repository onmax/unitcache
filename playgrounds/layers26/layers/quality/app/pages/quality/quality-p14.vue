<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState17()
useHead({ title: `Quality 14 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p14">
    <h1>Quality page 14 ({{ count }})</h1>
    <QualityWidget161 title="QualityWidget161" />
    <QualityWidget212 title="QualityWidget212" />
    <QualityWidget154 title="QualityWidget154" />
    <QualityWidget172 title="QualityWidget172" />
  </div>
</template>
