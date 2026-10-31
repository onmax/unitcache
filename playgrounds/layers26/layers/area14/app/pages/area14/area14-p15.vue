<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State16()
useHead({ title: `Area14 15 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p15">
    <h1>Area14 page 15 ({{ count }})</h1>
    <Area14Widget99 title="Area14Widget99" />
    <Area14Widget113 title="Area14Widget113" />
    <Area14Widget67 title="Area14Widget67" />
    <Area14Widget226 title="Area14Widget226" />
    <Area14Widget29 title="Area14Widget29" />
  </div>
</template>
