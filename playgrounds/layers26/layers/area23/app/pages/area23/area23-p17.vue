<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State28()
useHead({ title: `Area23 17 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p17">
    <h1>Area23 page 17 ({{ count }})</h1>
    <Area23Widget154 title="Area23Widget154" />
    <Area23Widget71 title="Area23Widget71" />
    <Area23Widget22 title="Area23Widget22" />
    <Area23Widget249 title="Area23Widget249" />
  </div>
</template>
