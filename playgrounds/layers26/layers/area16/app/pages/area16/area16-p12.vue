<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State27()
useHead({ title: `Area16 12 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p12">
    <h1>Area16 page 12 ({{ count }})</h1>
    <Area16Widget95 title="Area16Widget95" />
    <Area16Widget243 title="Area16Widget243" />
    <Area16Widget186 title="Area16Widget186" />
    <Area16Widget98 title="Area16Widget98" />
    <Area16Widget209 title="Area16Widget209" />
  </div>
</template>
