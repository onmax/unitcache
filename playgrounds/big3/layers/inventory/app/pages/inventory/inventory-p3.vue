<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState25()
useHead({ title: `Inventory 3 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p3">
    <h1>Inventory page 3 ({{ count }})</h1>
    <InventoryWidget48 title="InventoryWidget48" />
    <InventoryWidget155 title="InventoryWidget155" />
    <InventoryWidget154 title="InventoryWidget154" />
    <InventoryWidget148 title="InventoryWidget148" />
    <InventoryWidget129 title="InventoryWidget129" />
  </div>
</template>
