<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState18()
useHead({ title: `Inventory 2 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p2">
    <h1>Inventory page 2 ({{ count }})</h1>
    <InventoryWidget27 title="InventoryWidget27" />
    <InventoryWidget4 title="InventoryWidget4" />
    <InventoryWidget148 title="InventoryWidget148" />
    <InventoryWidget37 title="InventoryWidget37" />
    <InventoryWidget201 title="InventoryWidget201" />
  </div>
</template>
