<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['quality-guard'] })
const route = useRoute()
const { count } = useQualityState22()
useHead({ title: `Quality 13 ${route.params.qualityId ?? ''}` })
</script>

<template>
  <div class="page quality-p13">
    <h1>Quality page 13 ({{ count }})</h1>
    <QualityWidget184 title="QualityWidget184" />
    <QualityWidget213 title="QualityWidget213" />
    <QualityWidget106 title="QualityWidget106" />
  </div>
</template>
