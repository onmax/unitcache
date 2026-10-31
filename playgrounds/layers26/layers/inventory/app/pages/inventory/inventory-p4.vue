<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState3()
useHead({ title: `Inventory 4 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p4">
    <h1>Inventory page 4 ({{ count }})</h1>
    <InventoryWidget135 title="InventoryWidget135" />
    <InventoryWidget208 title="InventoryWidget208" />
    <InventoryWidget68 title="InventoryWidget68" />
    <InventoryWidget92 title="InventoryWidget92" />
    <InventoryWidget248 title="InventoryWidget248" />
  </div>
</template>
