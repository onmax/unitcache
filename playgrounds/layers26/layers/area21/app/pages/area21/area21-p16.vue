<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State9()
useHead({ title: `Area21 16 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p16">
    <h1>Area21 page 16 ({{ count }})</h1>
    <Area21Widget189 title="Area21Widget189" />
    <Area21Widget190 title="Area21Widget190" />
    <Area21Widget243 title="Area21Widget243" />
    <Area21Widget116 title="Area21Widget116" />
    <Area21Widget164 title="Area21Widget164" />
  </div>
</template>
