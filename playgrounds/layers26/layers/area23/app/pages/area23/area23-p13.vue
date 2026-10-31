<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State19()
useHead({ title: `Area23 13 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p13">
    <h1>Area23 page 13 ({{ count }})</h1>
    <Area23Widget202 title="Area23Widget202" />
    <Area23Widget115 title="Area23Widget115" />
    <Area23Widget163 title="Area23Widget163" />
    <Area23Widget62 title="Area23Widget62" />
    <Area23Widget141 title="Area23Widget141" />
  </div>
</template>
