<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState7()
useHead({ title: `Inventory 6 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p6">
    <h1>Inventory page 6 ({{ count }})</h1>
    <InventoryWidget16 title="InventoryWidget16" />
    <InventoryWidget72 title="InventoryWidget72" />
    <InventoryWidget41 title="InventoryWidget41" />
    <InventoryWidget104 title="InventoryWidget104" />
    <InventoryWidget55 title="InventoryWidget55" />
    <InventoryWidget225 title="InventoryWidget225" />
  </div>
</template>
