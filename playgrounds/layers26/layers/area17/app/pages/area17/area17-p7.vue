<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State16()
useHead({ title: `Area17 7 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p7">
    <h1>Area17 page 7 ({{ count }})</h1>
    <Area17Widget14 title="Area17Widget14" />
    <Area17Widget84 title="Area17Widget84" />
    <Area17Widget121 title="Area17Widget121" />
    <Area17Widget238 title="Area17Widget238" />
    <Area17Widget110 title="Area17Widget110" />
  </div>
</template>
