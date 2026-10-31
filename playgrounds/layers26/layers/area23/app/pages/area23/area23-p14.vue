<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State28()
useHead({ title: `Area23 14 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p14">
    <h1>Area23 page 14 ({{ count }})</h1>
    <Area23Widget185 title="Area23Widget185" />
    <Area23Widget218 title="Area23Widget218" />
    <Area23Widget70 title="Area23Widget70" />
    <Area23Widget84 title="Area23Widget84" />
    <Area23Widget36 title="Area23Widget36" />
  </div>
</template>
