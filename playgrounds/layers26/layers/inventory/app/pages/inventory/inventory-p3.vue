<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState11()
useHead({ title: `Inventory 3 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p3">
    <h1>Inventory page 3 ({{ count }})</h1>
    <InventoryWidget1 title="InventoryWidget1" />
    <InventoryWidget239 title="InventoryWidget239" />
    <InventoryWidget129 title="InventoryWidget129" />
    <InventoryWidget64 title="InventoryWidget64" />
  </div>
</template>
