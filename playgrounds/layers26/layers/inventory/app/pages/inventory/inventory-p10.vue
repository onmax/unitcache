<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState18()
useHead({ title: `Inventory 10 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p10">
    <h1>Inventory page 10 ({{ count }})</h1>
    <InventoryWidget53 title="InventoryWidget53" />
    <InventoryWidget56 title="InventoryWidget56" />
    <InventoryWidget170 title="InventoryWidget170" />
    <InventoryWidget25 title="InventoryWidget25" />
    <InventoryWidget37 title="InventoryWidget37" />
    <InventoryWidget166 title="InventoryWidget166" />
  </div>
</template>
