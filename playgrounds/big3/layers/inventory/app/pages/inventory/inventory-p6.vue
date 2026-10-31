<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState25()
useHead({ title: `Inventory 6 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p6">
    <h1>Inventory page 6 ({{ count }})</h1>
    <InventoryWidget120 title="InventoryWidget120" />
    <InventoryWidget197 title="InventoryWidget197" />
    <InventoryWidget149 title="InventoryWidget149" />
  </div>
</template>
