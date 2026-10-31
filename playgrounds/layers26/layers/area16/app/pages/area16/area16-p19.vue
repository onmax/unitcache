<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State12()
useHead({ title: `Area16 19 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p19">
    <h1>Area16 page 19 ({{ count }})</h1>
    <Area16Widget202 title="Area16Widget202" />
    <Area16Widget149 title="Area16Widget149" />
    <Area16Widget95 title="Area16Widget95" />
    <Area16Widget229 title="Area16Widget229" />
    <Area16Widget113 title="Area16Widget113" />
    <Area16Widget231 title="Area16Widget231" />
  </div>
</template>
