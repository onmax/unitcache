<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State0()
useHead({ title: `Area17 9 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p9">
    <h1>Area17 page 9 ({{ count }})</h1>
    <Area17Widget109 title="Area17Widget109" />
    <Area17Widget240 title="Area17Widget240" />
    <Area17Widget6 title="Area17Widget6" />
  </div>
</template>
