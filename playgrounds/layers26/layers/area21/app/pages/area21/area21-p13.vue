<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State1()
useHead({ title: `Area21 13 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p13">
    <h1>Area21 page 13 ({{ count }})</h1>
    <Area21Widget107 title="Area21Widget107" />
    <Area21Widget129 title="Area21Widget129" />
    <Area21Widget85 title="Area21Widget85" />
    <Area21Widget236 title="Area21Widget236" />
    <Area21Widget160 title="Area21Widget160" />
  </div>
</template>
