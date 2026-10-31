<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State7()
useHead({ title: `Area23 11 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p11">
    <h1>Area23 page 11 ({{ count }})</h1>
    <Area23Widget37 title="Area23Widget37" />
    <Area23Widget113 title="Area23Widget113" />
    <Area23Widget57 title="Area23Widget57" />
    <Area23Widget172 title="Area23Widget172" />
    <Area23Widget42 title="Area23Widget42" />
  </div>
</template>
