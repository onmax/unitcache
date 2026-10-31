<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State16()
useHead({ title: `Area16 9 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p9">
    <h1>Area16 page 9 ({{ count }})</h1>
    <Area16Widget20 title="Area16Widget20" />
    <Area16Widget151 title="Area16Widget151" />
    <Area16Widget183 title="Area16Widget183" />
    <Area16Widget145 title="Area16Widget145" />
    <Area16Widget117 title="Area16Widget117" />
    <Area16Widget107 title="Area16Widget107" />
  </div>
</template>
