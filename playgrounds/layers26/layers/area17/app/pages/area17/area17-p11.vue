<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State26()
useHead({ title: `Area17 11 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p11">
    <h1>Area17 page 11 ({{ count }})</h1>
    <Area17Widget9 title="Area17Widget9" />
    <Area17Widget7 title="Area17Widget7" />
    <Area17Widget227 title="Area17Widget227" />
  </div>
</template>
