<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State25()
useHead({ title: `Area17 14 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p14">
    <h1>Area17 page 14 ({{ count }})</h1>
    <Area17Widget88 title="Area17Widget88" />
    <Area17Widget230 title="Area17Widget230" />
    <Area17Widget85 title="Area17Widget85" />
    <Area17Widget87 title="Area17Widget87" />
    <Area17Widget30 title="Area17Widget30" />
    <Area17Widget244 title="Area17Widget244" />
  </div>
</template>
