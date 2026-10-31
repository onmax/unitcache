<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State15()
useHead({ title: `Area17 6 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p6">
    <h1>Area17 page 6 ({{ count }})</h1>
    <Area17Widget9 title="Area17Widget9" />
    <Area17Widget247 title="Area17Widget247" />
    <Area17Widget17 title="Area17Widget17" />
    <Area17Widget176 title="Area17Widget176" />
  </div>
</template>
