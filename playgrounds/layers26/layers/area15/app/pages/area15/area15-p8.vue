<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State29()
useHead({ title: `Area15 8 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p8">
    <h1>Area15 page 8 ({{ count }})</h1>
    <Area15Widget83 title="Area15Widget83" />
    <Area15Widget122 title="Area15Widget122" />
    <Area15Widget141 title="Area15Widget141" />
    <Area15Widget52 title="Area15Widget52" />
    <Area15Widget182 title="Area15Widget182" />
  </div>
</template>
