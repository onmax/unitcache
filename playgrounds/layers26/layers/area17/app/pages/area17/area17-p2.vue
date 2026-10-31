<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State5()
useHead({ title: `Area17 2 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p2">
    <h1>Area17 page 2 ({{ count }})</h1>
    <Area17Widget43 title="Area17Widget43" />
    <Area17Widget151 title="Area17Widget151" />
    <Area17Widget248 title="Area17Widget248" />
    <Area17Widget216 title="Area17Widget216" />
  </div>
</template>
