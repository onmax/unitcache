<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['kpis-guard'] })
const route = useRoute()
const { count } = useKpisState2()
useHead({ title: `Kpis 11 ${route.params.kpisId ?? ''}` })
</script>

<template>
  <div class="page kpis-p11">
    <h1>Kpis page 11 ({{ count }})</h1>
    <KpisWidget195 title="KpisWidget195" />
    <KpisWidget199 title="KpisWidget199" />
    <KpisWidget13 title="KpisWidget13" />
    <KpisWidget152 title="KpisWidget152" />
    <KpisWidget112 title="KpisWidget112" />
    <KpisWidget158 title="KpisWidget158" />
  </div>
</template>
