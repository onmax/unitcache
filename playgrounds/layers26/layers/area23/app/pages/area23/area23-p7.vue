<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State24()
useHead({ title: `Area23 7 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p7">
    <h1>Area23 page 7 ({{ count }})</h1>
    <Area23Widget183 title="Area23Widget183" />
    <Area23Widget105 title="Area23Widget105" />
    <Area23Widget86 title="Area23Widget86" />
    <Area23Widget102 title="Area23Widget102" />
  </div>
</template>
