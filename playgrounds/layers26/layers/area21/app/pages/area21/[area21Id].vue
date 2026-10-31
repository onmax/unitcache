<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State11()
useHead({ title: `Area21 1 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p1">
    <h1>Area21 page 1 ({{ count }})</h1>
    <Area21Widget199 title="Area21Widget199" />
    <Area21Widget175 title="Area21Widget175" />
    <Area21Widget102 title="Area21Widget102" />
  </div>
</template>
