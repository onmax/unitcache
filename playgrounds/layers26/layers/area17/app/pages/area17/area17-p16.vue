<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State29()
useHead({ title: `Area17 16 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p16">
    <h1>Area17 page 16 ({{ count }})</h1>
    <Area17Widget31 title="Area17Widget31" />
    <Area17Widget86 title="Area17Widget86" />
    <Area17Widget104 title="Area17Widget104" />
    <Area17Widget43 title="Area17Widget43" />
    <Area17Widget146 title="Area17Widget146" />
    <Area17Widget29 title="Area17Widget29" />
  </div>
</template>
