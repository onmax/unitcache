<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State28()
useHead({ title: `Area15 16 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p16">
    <h1>Area15 page 16 ({{ count }})</h1>
    <Area15Widget77 title="Area15Widget77" />
    <Area15Widget249 title="Area15Widget249" />
    <Area15Widget222 title="Area15Widget222" />
    <Area15Widget132 title="Area15Widget132" />
    <Area15Widget7 title="Area15Widget7" />
  </div>
</template>
