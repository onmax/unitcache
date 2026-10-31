<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State0()
useHead({ title: `Area16 0 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p0">
    <h1>Area16 page 0 ({{ count }})</h1>
    <Area16Widget243 title="Area16Widget243" />
    <Area16Widget102 title="Area16Widget102" />
    <Area16Widget47 title="Area16Widget47" />
    <Area16Widget180 title="Area16Widget180" />
  </div>
</template>
