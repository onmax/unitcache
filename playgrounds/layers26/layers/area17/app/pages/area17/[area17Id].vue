<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State14()
useHead({ title: `Area17 1 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p1">
    <h1>Area17 page 1 ({{ count }})</h1>
    <Area17Widget121 title="Area17Widget121" />
    <Area17Widget63 title="Area17Widget63" />
    <Area17Widget223 title="Area17Widget223" />
    <Area17Widget33 title="Area17Widget33" />
    <Area17Widget94 title="Area17Widget94" />
  </div>
</template>
