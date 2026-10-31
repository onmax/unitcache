<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State20()
useHead({ title: `Area17 17 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p17">
    <h1>Area17 page 17 ({{ count }})</h1>
    <Area17Widget36 title="Area17Widget36" />
    <Area17Widget20 title="Area17Widget20" />
    <Area17Widget185 title="Area17Widget185" />
    <Area17Widget181 title="Area17Widget181" />
    <Area17Widget124 title="Area17Widget124" />
  </div>
</template>
