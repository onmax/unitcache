<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area13-guard'] })
const route = useRoute()
const { count } = useArea13State3()
useHead({ title: `Area13 2 ${route.params.area13Id ?? ''}` })
</script>

<template>
  <div class="page area13-p2">
    <h1>Area13 page 2 ({{ count }})</h1>
    <Area13Widget112 title="Area13Widget112" />
    <Area13Widget249 title="Area13Widget249" />
    <Area13Widget225 title="Area13Widget225" />
    <Area13Widget208 title="Area13Widget208" />
    <Area13Widget76 title="Area13Widget76" />
    <Area13Widget122 title="Area13Widget122" />
  </div>
</template>
