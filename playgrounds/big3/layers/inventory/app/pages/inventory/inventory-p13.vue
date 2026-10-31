<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState27()
useHead({ title: `Inventory 13 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p13">
    <h1>Inventory page 13 ({{ count }})</h1>
    <InventoryWidget48 title="InventoryWidget48" />
    <InventoryWidget57 title="InventoryWidget57" />
    <InventoryWidget226 title="InventoryWidget226" />
    <InventoryWidget214 title="InventoryWidget214" />
  </div>
</template>
