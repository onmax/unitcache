<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState18()
useHead({ title: `Inventory 11 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p11">
    <h1>Inventory page 11 ({{ count }})</h1>
    <InventoryWidget67 title="InventoryWidget67" />
    <InventoryWidget163 title="InventoryWidget163" />
    <InventoryWidget130 title="InventoryWidget130" />
    <InventoryWidget197 title="InventoryWidget197" />
    <InventoryWidget246 title="InventoryWidget246" />
  </div>
</template>
