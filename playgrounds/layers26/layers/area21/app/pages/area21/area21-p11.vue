<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State14()
useHead({ title: `Area21 11 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p11">
    <h1>Area21 page 11 ({{ count }})</h1>
    <Area21Widget177 title="Area21Widget177" />
    <Area21Widget120 title="Area21Widget120" />
    <Area21Widget229 title="Area21Widget229" />
  </div>
</template>
