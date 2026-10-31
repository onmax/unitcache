<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State25()
useHead({ title: `Area16 1 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p1">
    <h1>Area16 page 1 ({{ count }})</h1>
    <Area16Widget176 title="Area16Widget176" />
    <Area16Widget8 title="Area16Widget8" />
    <Area16Widget182 title="Area16Widget182" />
  </div>
</template>
