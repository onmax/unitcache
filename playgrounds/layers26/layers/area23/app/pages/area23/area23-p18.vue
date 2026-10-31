<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State1()
useHead({ title: `Area23 18 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p18">
    <h1>Area23 page 18 ({{ count }})</h1>
    <Area23Widget7 title="Area23Widget7" />
    <Area23Widget158 title="Area23Widget158" />
    <Area23Widget187 title="Area23Widget187" />
  </div>
</template>
