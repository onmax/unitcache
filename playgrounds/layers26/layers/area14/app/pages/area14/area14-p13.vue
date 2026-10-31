<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area14-guard'] })
const route = useRoute()
const { count } = useArea14State2()
useHead({ title: `Area14 13 ${route.params.area14Id ?? ''}` })
</script>

<template>
  <div class="page area14-p13">
    <h1>Area14 page 13 ({{ count }})</h1>
    <Area14Widget113 title="Area14Widget113" />
    <Area14Widget135 title="Area14Widget135" />
    <Area14Widget170 title="Area14Widget170" />
  </div>
</template>
