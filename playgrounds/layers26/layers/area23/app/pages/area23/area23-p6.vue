<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State23()
useHead({ title: `Area23 6 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p6">
    <h1>Area23 page 6 ({{ count }})</h1>
    <Area23Widget134 title="Area23Widget134" />
    <Area23Widget177 title="Area23Widget177" />
    <Area23Widget248 title="Area23Widget248" />
  </div>
</template>
