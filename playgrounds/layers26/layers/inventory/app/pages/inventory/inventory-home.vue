<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState0()
useHead({ title: `Inventory 0 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p0">
    <h1>Inventory page 0 ({{ count }})</h1>
    <InventoryWidget39 title="InventoryWidget39" />
    <InventoryWidget16 title="InventoryWidget16" />
    <InventoryWidget43 title="InventoryWidget43" />
    <InventoryWidget103 title="InventoryWidget103" />
    <InventoryWidget162 title="InventoryWidget162" />
    <InventoryWidget36 title="InventoryWidget36" />
  </div>
</template>
