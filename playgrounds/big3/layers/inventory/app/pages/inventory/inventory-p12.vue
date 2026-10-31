<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState28()
useHead({ title: `Inventory 12 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p12">
    <h1>Inventory page 12 ({{ count }})</h1>
    <InventoryWidget103 title="InventoryWidget103" />
    <InventoryWidget186 title="InventoryWidget186" />
    <InventoryWidget101 title="InventoryWidget101" />
    <InventoryWidget238 title="InventoryWidget238" />
    <InventoryWidget123 title="InventoryWidget123" />
  </div>
</template>
