<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State17()
useHead({ title: `Area23 3 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p3">
    <h1>Area23 page 3 ({{ count }})</h1>
    <Area23Widget189 title="Area23Widget189" />
    <Area23Widget111 title="Area23Widget111" />
    <Area23Widget160 title="Area23Widget160" />
    <Area23Widget65 title="Area23Widget65" />
    <Area23Widget44 title="Area23Widget44" />
    <Area23Widget90 title="Area23Widget90" />
  </div>
</template>
