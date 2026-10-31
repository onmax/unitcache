<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState10()
useHead({ title: `Quality 18 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p18">
    <h1>Quality page 18 ({{ count }})</h1>
    <QualityWidget77 title="QualityWidget77" />
    <QualityWidget243 title="QualityWidget243" />
    <QualityWidget195 title="QualityWidget195" />
    <QualityWidget167 title="QualityWidget167" />
    <QualityWidget233 title="QualityWidget233" />
  </div>
</template>
