<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State6()
useHead({ title: `Area18 13 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p13">
    <h1>Area18 page 13 ({{ count }})</h1>
    <Area18Widget113 title="Area18Widget113" />
    <Area18Widget227 title="Area18Widget227" />
    <Area18Widget85 title="Area18Widget85" />
    <Area18Widget83 title="Area18Widget83" />
    <Area18Widget162 title="Area18Widget162" />
  </div>
</template>
