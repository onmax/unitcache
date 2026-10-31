<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State22()
useHead({ title: `Area16 17 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p17">
    <h1>Area16 page 17 ({{ count }})</h1>
    <Area16Widget134 title="Area16Widget134" />
    <Area16Widget104 title="Area16Widget104" />
    <Area16Widget163 title="Area16Widget163" />
    <Area16Widget168 title="Area16Widget168" />
  </div>
</template>
