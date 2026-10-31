<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState2()
useHead({ title: `Inventory 4 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p4">
    <h1>Inventory page 4 ({{ count }})</h1>
    <InventoryWidget45 title="InventoryWidget45" />
    <InventoryWidget23 title="InventoryWidget23" />
    <InventoryWidget129 title="InventoryWidget129" />
    <InventoryWidget53 title="InventoryWidget53" />
    <InventoryWidget7 title="InventoryWidget7" />
    <InventoryWidget225 title="InventoryWidget225" />
  </div>
</template>
