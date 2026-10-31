<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area15-guard'] })
const route = useRoute()
const { count } = useArea15State1()
useHead({ title: `Area15 17 ${route.params.area15Id ?? ''}` })
</script>

<template>
  <div class="page area15-p17">
    <h1>Area15 page 17 ({{ count }})</h1>
    <Area15Widget94 title="Area15Widget94" />
    <Area15Widget103 title="Area15Widget103" />
    <Area15Widget229 title="Area15Widget229" />
    <Area15Widget181 title="Area15Widget181" />
    <Area15Widget117 title="Area15Widget117" />
  </div>
</template>
