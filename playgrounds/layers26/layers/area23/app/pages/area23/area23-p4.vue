<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State9()
useHead({ title: `Area23 4 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p4">
    <h1>Area23 page 4 ({{ count }})</h1>
    <Area23Widget208 title="Area23Widget208" />
    <Area23Widget38 title="Area23Widget38" />
    <Area23Widget174 title="Area23Widget174" />
    <Area23Widget186 title="Area23Widget186" />
  </div>
</template>
