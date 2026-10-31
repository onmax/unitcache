<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State5()
useHead({ title: `Area23 9 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p9">
    <h1>Area23 page 9 ({{ count }})</h1>
    <Area23Widget243 title="Area23Widget243" />
    <Area23Widget51 title="Area23Widget51" />
    <Area23Widget9 title="Area23Widget9" />
    <Area23Widget66 title="Area23Widget66" />
  </div>
</template>
