<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState21()
useHead({ title: `Quality 17 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p17">
    <h1>Quality page 17 ({{ count }})</h1>
    <QualityWidget104 title="QualityWidget104" />
    <QualityWidget153 title="QualityWidget153" />
    <QualityWidget18 title="QualityWidget18" />
    <QualityWidget141 title="QualityWidget141" />
    <QualityWidget126 title="QualityWidget126" />
    <QualityWidget229 title="QualityWidget229" />
  </div>
</template>
