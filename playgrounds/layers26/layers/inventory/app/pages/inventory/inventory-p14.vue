<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState25()
useHead({ title: `Inventory 14 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p14">
    <h1>Inventory page 14 ({{ count }})</h1>
    <InventoryWidget244 title="InventoryWidget244" />
    <InventoryWidget125 title="InventoryWidget125" />
    <InventoryWidget28 title="InventoryWidget28" />
    <InventoryWidget163 title="InventoryWidget163" />
    <InventoryWidget155 title="InventoryWidget155" />
  </div>
</template>
