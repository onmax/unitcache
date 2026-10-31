<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State23()
useHead({ title: `Area14 8 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p8">
    <h1>Area14 page 8 ({{ count }})</h1>
    <Area14Widget209 title="Area14Widget209" />
    <Area14Widget29 title="Area14Widget29" />
    <Area14Widget212 title="Area14Widget212" />
    <Area14Widget208 title="Area14Widget208" />
    <Area14Widget78 title="Area14Widget78" />
  </div>
</template>
