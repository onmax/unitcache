<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State25()
useHead({ title: `Area14 19 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p19">
    <h1>Area14 page 19 ({{ count }})</h1>
    <Area14Widget24 title="Area14Widget24" />
    <Area14Widget248 title="Area14Widget248" />
    <Area14Widget154 title="Area14Widget154" />
    <Area14Widget87 title="Area14Widget87" />
  </div>
</template>
