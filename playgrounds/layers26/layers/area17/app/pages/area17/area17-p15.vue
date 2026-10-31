<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area17-guard'] })
const route = useRoute()
const { count } = useArea17State5()
useHead({ title: `Area17 15 ${route.params.area17Id ?? ''}` })
</script>

<template>
  <div class="page area17-p15">
    <h1>Area17 page 15 ({{ count }})</h1>
    <Area17Widget122 title="Area17Widget122" />
    <Area17Widget158 title="Area17Widget158" />
    <Area17Widget213 title="Area17Widget213" />
    <Area17Widget203 title="Area17Widget203" />
    <Area17Widget207 title="Area17Widget207" />
  </div>
</template>
