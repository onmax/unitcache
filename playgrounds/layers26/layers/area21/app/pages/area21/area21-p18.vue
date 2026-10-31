<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area21-guard'] })
const route = useRoute()
const { count } = useArea21State21()
useHead({ title: `Area21 18 ${route.params.area21Id ?? ''}` })
</script>

<template>
  <div class="page area21-p18">
    <h1>Area21 page 18 ({{ count }})</h1>
    <Area21Widget237 title="Area21Widget237" />
    <Area21Widget33 title="Area21Widget33" />
    <Area21Widget77 title="Area21Widget77" />
    <Area21Widget109 title="Area21Widget109" />
    <Area21Widget180 title="Area21Widget180" />
    <Area21Widget198 title="Area21Widget198" />
  </div>
</template>
