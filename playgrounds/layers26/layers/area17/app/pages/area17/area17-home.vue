<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State27()
useHead({ title: `Area17 0 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p0">
    <h1>Area17 page 0 ({{ count }})</h1>
    <Area17Widget191 title="Area17Widget191" />
    <Area17Widget90 title="Area17Widget90" />
    <Area17Widget243 title="Area17Widget243" />
    <Area17Widget145 title="Area17Widget145" />
    <Area17Widget154 title="Area17Widget154" />
  </div>
</template>
