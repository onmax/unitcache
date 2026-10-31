<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area22-guard'] })
const route = useRoute()
const { count } = useArea22State12()
useHead({ title: `Area22 0 ${route.params.area22Id ?? ''}` })
</script>

<template>
  <div class="page area22-p0">
    <h1>Area22 page 0 ({{ count }})</h1>
    <Area22Widget101 title="Area22Widget101" />
    <Area22Widget227 title="Area22Widget227" />
    <Area22Widget88 title="Area22Widget88" />
    <Area22Widget60 title="Area22Widget60" />
  </div>
</template>
